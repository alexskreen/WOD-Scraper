const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="entry-6a010534c269dc970c0263ec1b3e35200c"]/div/h3/a'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    '//*[@id="entry-6a010534c269dc970c0263ec1b3e35200c"]/div/div[1]/div[1]/p[5]'
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  const [el3] = await page.$x(
    '//*[@id="entry-6a010534c269dc970c0263ec1b3e35200c"]/div/div[1]/div[1]/p[8]'
  );
  const txt3 = await el3.getProperty("textContent");
  const wod2 = await txt3.jsonValue();

  console.log({ date, wod, wod2 });

  browser.close();
}

scrapeSite("https://www.crossfitbrisbane.com/blog/blog_index.html");









//*[@id="entry-6a010534c269dc970c0263ec1b3e35200c"]/div/div[1]/div[1]/p[7]