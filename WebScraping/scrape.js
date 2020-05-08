const request = require('request');
const cheerio = require('cheerio');

request("https://comptrain.co/wod/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(html);

    const wodDate = $(".wod-date");
    // console.log(wodDate.html);
    // console.log(wodDate.text);
    const output = wodDate.find('h5').text();
    console.log(output);
    // const output = wodDate.children("h5").text();
    // console.log(output);
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