const express = require("express");

const app = express();
const port = 3000;

const bodyParser = require("body-parser");

const scrapers = require('./scrapers');
const comptrainScraper = require ('./comptrainScraper')
const mayhemScraper = require("./mayhemScraper");

const db = require('./db');

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/gyms", async (req, res) => {
  const gyms = await db.getAllGyms();
  res.send(gyms);
});

app.post("/gyms", async (req, res) => {
  console.log(req.body);
  //this is going to need a lengthy conditional
    const gymData = await comptrainScraper.scrapeSite(req.body.gymURL);
    const gyms = await db.insertGym(
      gymData.date,
      gymData.wod,
      req.body.gymURL
    );
    res.send(gyms);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
