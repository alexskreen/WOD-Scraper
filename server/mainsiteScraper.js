const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="archives"]/div[1]/div[1]/div/div/div[2]/h3/a'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    '/html/body/div[3]/section[2]/div[1]/div[1]/div/div/div[2]/div/div[1]/p[1]/strong'
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  browser.close();

  console.log(date, wod);

  // return({ date, wod });
}

// module.exports = {
//   scrapeSite('https://www.crossfit.com/workout/')
// };

scrapeSite('https://www.crossfit.com/workout/');