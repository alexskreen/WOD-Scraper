const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [wod] = await page.$x('//*[@id="yui_3_17_2_1_1589570574697_196"]');
  await wod.click();
  console.log({wod})
  // const [el] = await page.$x('//*[@id="post-5eb8b53340f56e45fef1befa"]/h1');
  // const txt = await el.getProperty("textContent");
  // const rawTxt = await txt.jsonValue();

  // const [el2] = await page.$x('//*[@id="block-5e74fba042f9325f096b"]/div/p');
  // const txt2 = await el2.getProperty("textContent");
  // const rawTxt2 = await txt2.jsonValue();

  // console.log({rawTxt});

  browser.close();
}

scrapeProduct("https://www.crossfitmayhem.com/daily-workout-posts/");