const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="inner-content"]/section/div/article/div[1]/h2'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="wod-short"]');
  const txt2 = await el2.getProperty("textContent");
  const wodShort = await txt2.jsonValue();

  const [el3] = await page.$x(
    '//*[@id="inner-content"]/section/div/article/div[1]/table/tbody/tr[2]/td[2]'
  );
  const txt3 = await el3.getProperty("textContent");
  const wodMedium = await txt3.jsonValue();

  const [el4] = await page.$x('//*[@id="wod-long"]');
  const txt4 = await el4.getProperty("textContent");
  const wodLong = await txt4.jsonValue();

  console.log({ date, wodShort, wodMedium, wodLong });

  browser.close();
}

scrapeSite("https://www.concept2.com/indoor-rowers/training/wod");
