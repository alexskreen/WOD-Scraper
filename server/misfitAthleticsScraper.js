const puppeteer = require('puppeteer');
async function scrapeSite() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://misfitathletics.com/login/')
  
  await page.setViewport({ width: 1280, height: 865 })
  
  await page.waitForSelector('.container > #theme-my-login > #loginform #user_login')
  await page.click('.container > #theme-my-login > #loginform #user_login')
  
  await page.type('.container > #theme-my-login > #loginform #user_login', 'alex-skreen')
    await page.type(
      ".container > #theme-my-login > #loginform #user_pass",
      "epicodus"
    );
  
  await page.waitForSelector('.container > #theme-my-login > #loginform #wp-submit')
  await page.click('.container > #theme-my-login > #loginform #wp-submit')
  
  await navigationPromise
  
  await page.waitForSelector('#page > .entry > .hero-post-content > .relative > .button')
  await page.click('#page > .entry > .hero-post-content > .relative > .button')
  
  await navigationPromise

  const [el] = await page.$x(
    "/html/body/div[2]/div[1]/div[3]/main/div/div[1]/p[3]/strong"
  );
  const txt = await el.getProperty("textContent");
  const date = await txt.jsonValue();

  const [el2] = await page.$x(
    "/html/body/div[2]/div[1]/div[3]/main/div/div[1]/p[4]"
  );
  const txt2 = await el2.getProperty("textContent");
  const wod = await txt2.jsonValue();
  
  await browser.close()

  return({ wod });
};

module.exports = {
  scrapeSite,
};