const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="post-5ec1e5e85bddb16cf6e4cad9"]/a');
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="block-f135f71c9ba65db9d8df"]/div');
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  browser.close();


  console.log({ date, wod });

}

scrapeSite("https://www.crossfitmayhem.com/daily-workout-posts");

module.exports = {
  scrapeSite,
};