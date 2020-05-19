const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // const [el] = await page.$x('//*[@id="yui_3_17_2_1_1589928572140_468"]');
  // const txt = await el.getProperty("textContent");
  // const date = await txt.jsonValue();

  // const [el2] = await page.$x('//*[@id="block-e43904eb00aa45dc63ea"]/div/p[2]');
  // const txt2 = await el2.getProperty("textContent");
  // const wod = await txt2.jsonValue();

  const [el3] = await page.$x('//*[@id="article-5ebeaeb5c4b8b2207a771f47"]');
  const txt3 = await el3.getProperty("textContent");
  const wod2 = await txt3.jsonValue();

    // const [el4] = await page.$x(
    //   '//*[@id="block-e43904eb00aa45dc63ea"]/div/p[4]'
    // );
    // const txt4 = await el4.getProperty("textContent");
    // const wod3 = await txt4.jsonValue();

  console.log({ wod2 });

  browser.close();
}

scrapeSite("https://www.crossfit307.com/wod");
