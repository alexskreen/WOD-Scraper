const request = require('request');
const cheerio = require('cheerio');

request("https://comptrain.co/wod/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(html);
  }
});

// request("https://www.crossfit.com/", (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

// request("https://www.crossfitlinchpin.com/", (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
//   else {
//     console.log("nope");
//   }
// });