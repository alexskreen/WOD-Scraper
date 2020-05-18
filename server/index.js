const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

// const scrapers = require("./scrapers");
// const db = require("./db");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/creators", async (req, res) => {
  // const creators = await db.getAllCreators();
  // res.send(creators);

  const creators = [
    { name: "Code Drip", img: "https://" },
    { name: "Dave Lee", img: "https://" },
    { name: "MKBHD", img: "https://" },
  ];
  // todo: GET from DB
  res.send(creators);
});

app.post("/creators", async (req, res) => {
  console.log(req.body);
  res.send('success')
  // const channelData = await scrapers.scrapeChannel(req.body.channelURL);
  // const creators = await db.insertCreator(
  //   channelData.name,
  //   channelData.avatarURL,
  //   req.body.channelURL
  // );
  // res.send(creators);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
