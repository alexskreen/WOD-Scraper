const puppeteer = require("puppeteer");

async function scrapeChannel(url) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="page"]/section[2]/div[2]/div[1]/div/div/div/h5'
  );
  const text = await el.getProperty('textContent');
  const name = await text.jsonValue();

  const [el2] = await page.$x(
    '//*[@id="page"]/section[2]/div[2]/div[2]/div/div[1]/h3'
  );
  const text2 = await el2.getProperty("textContent");
  const wod = await text2.jsonValue();

  //I think I will be getting most of mmy information like I did on 9-11

  // const [el2] = await page.$x('//*[@id="img"]');
  // const src = await el2.getProperty('src');
  // const avatarURL = await src.jsonValue();

  browser.close();

  console.log({ name, wod });
  return { name, wod };
}

scrapeChannel("https://comptrain.co/wod/");

// module.exports = {
//   scrapeChannel,
// };
