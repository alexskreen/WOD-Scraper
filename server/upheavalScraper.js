const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="post-4946"]/div/header/div/span[1]/a/time'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="post-4946"]/div/header/h2/a');
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  browser.close();

  console.log( date, wod );

  return({ date, wod });
}

scrapeSite('https://crossfitupheaval.com/news/');

// module.exports = {
//   scrapeSite,
// };