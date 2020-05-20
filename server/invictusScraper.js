const puppeteer = require("puppeteer");
async function scrapeSite() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation();

  await page.goto("https://www.crossfitinvictus.com/wod/");

  await page.setViewport({ width: 754, height: 865 });

  await page.waitForSelector(
    ".main > .post-88438 > .entry-content > p > .read-more"
  );
  await page.click(".main > .post-88438 > .entry-content > p > .read-more");

  await navigationPromise;

  const [el] = await page.$x("/html/body/div[1]/div[2]/main/article/header/div/h2/a");
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x("/html/body/div[1]/div[2]/main/article/div[1]");
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();


  await browser.close();

  return({ date, wod });

};

module.exports = {
  scrapeSite,
};