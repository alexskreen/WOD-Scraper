const request = require('request');
const cheerio = require('cheerio');

request("https://comptrain.co/wod/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(html);

    const wodDate = $(".wod-date");
    const wodInfo = $(".wod-info");
    // console.log(wodDate.html);
    // console.log(wodDate.text);
    const output = wodDate.find('h5').text();
    const output2 = wodInfo.find('h3').text();
    const output3 = wodInfo.find('p').text();
    // console.log(output);
    // console.log(output2);
    console.log(output3);
    // const output = wodDate.children("h5").text();
    // console.log(output);
  }
    else {
    console.log("nope");
  }
});
