const express = require("express");

const app = express();
const port = 3000;

const bodyParser = require("body-parser");

const scrapers = require('./scrapers');
const comptrainScraper = require ('./comptrainScraper')
const concept2RowerScraper = require("./concept2RowerScraper");
const crossfit307Scraper = require("./crossfit307Scraper");
const crossfitArubaScraper = require("./crossfitArubaScraper");
const crossfitBrisbaneAccessoryScraper = require("./crossfitBrisbaneAccessoryScraper");
const crossfitBrisbaneLimitedScraper = require("./crossfitBrisbaneLimitedScraper");
const crossfitBrisbaneNoEquipmentScraper = require("./crossfitBrisbaneNoEquipmentScraper");
const crossfitBrisbaneScraper = require("./crossfitBrisbaneScraper");
const crossfitBrisbaneTeenScraper = require("./crossfitBrisbaneTeenScraper");
const crossfitOneScraper = require("./crossfitOneScraper");
const crossfitReykjavikScraper = require("./crossfitReykjavikScraper");
const invictusScraper = require("./invictusScraper");
const linchpinScraper = require("./linchpinScraper");
const mainsiteScraper = require("./mainsiteScraper");
const mayhemScraper = require("./mayhemScraper");
const misfitAthleticsScraper = require("./misfitAthleticsScraper");
const pushJerkScraper = require("./crossfitBrisbaneTeenScraper");
const upheavalScraper = require("./upheavalScraper");

const db = require('./db');

var userSelect = document.getElementById("gym-select");
var userGym = userSelect.options[userSelect.selectedIndex].value;

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
  console.log(userGym);
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
