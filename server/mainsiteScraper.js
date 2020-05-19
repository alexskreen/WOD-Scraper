const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="PageContainer"]/main/div[1]/div/div[1]/div/h3/a'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    '//*[@id="PageContainer"]/main/div[1]/div/div[1]/div/p[2]'
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  console.log({ date, wod });

  browser.close();
}

scrapeSite("https://www.crossfitlinchpin.com/pages/workout-of-the-day");
