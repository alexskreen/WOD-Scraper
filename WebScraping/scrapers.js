const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="page"]/section[2]/div[2]/div[1]');
  const txt = await el.getProperty('textContent');
  const rawTxt = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="page"]/section[2]/div[2]/div[2]');
  const txt2 = await el2.getProperty("textContent");
  const rawTxt2 = await txt2.jsonValue();

  console.log({rawTxt, rawTxt2});

  browser.close();
}

scrapeProduct("https://comptrain.co/wod/");