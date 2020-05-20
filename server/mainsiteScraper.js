const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="dailies-column-0-0"]/section/div[1]/div/h2/a/span[2]'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    '//*[@id="dailies-column-0-0"]/section/div[2]/div[1]/div/div/article/div'
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  browser.close();

  return({ date, wod });

}

module.exports = {
  scrapeSite,
};