const puppeteer = require("puppeteer");
async function scrapeSite() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.crossfitonenation.com/blog");

  await page.setViewport({ width: 835, height: 865 });

  await page.waitForSelector(
    "._2QQ2q:nth-child(2) > ._3vKAX > ._1SApF > ._2KOTE > .Z2euD > ._31oTl > ._1gHzn > .post-title__text > .blog-post-homepage-title-font"
  );
  await page.click(
    "._2QQ2q:nth-child(2) > ._3vKAX > ._1SApF > ._2KOTE > .Z2euD > ._31oTl > ._1gHzn > .post-title__text > .blog-post-homepage-title-font"
  );

  const [el] = await page.$x(
    "/html/body/div[1]/div[2]/main/article/header/div/h2/a"
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x("/html/body/div[1]/div[2]/main/article/div[1]");
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

    console.log({ date, wod });

  await browser.close();
};
