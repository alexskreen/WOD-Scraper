const puppeteer = require("puppeteer");

async function scrapeSite(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="page"]/section[2]/div[1]/div/div/div/p'
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    '//*[@id="wod"]'
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();

  browser.close();

  console.log(date, wod);

  return({ date, wod });
  
}

scrapeSite('https://comptrain.co/wod/')
// module.exports = {
//   scrapeSite,
// };