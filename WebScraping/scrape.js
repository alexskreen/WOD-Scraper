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
    // const output = wodDate.find('h5').text();
    // const output2 = wodInfo.find('h3').text();
    // const output3 = wodInfo.find('p').text();
    // console.log(output);
    // console.log(output2);
    // console.log(output3);
    // const output4 = wodInfo
    //   .find('p')
    //   .next()
    //   .text();
    // console.log(output4);

    $('.wod-info p').each((i, el) => {
      const item = $(el).text();

      console.log(item);
    });
  }
    else {
    console.log("nope");
  }
});

//     $('.wod-info h3').each((i, el) => {
//       const item = $(el).text();
//       if (item === "OPEN PREP") {
//         console.log(item);
//         $('.wod-info p').each((i, k) => {
//           const wod = $(k).text();
//           console.log(wod);
//         });
//       } else {
//       console.log("second conditional failed")
//       } 
//     });
//   }
//     else {
//     console.log("nope");
//   }
// });
