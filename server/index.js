const express = require("express");
// var favicon = require("serve-favicon");
// var path = require("path");

// var app = express();
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

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
// const misfitAthleticsScraper = require("./misfitAthleticsScraper");
const pushJerkScraper = require("./crossfitBrisbaneTeenScraper");
const upheavalScraper = require("./upheavalScraper");
const db = require('./db');

// these are all things I tried to do to get the select value.

// var userSelect = document.getElementById("gym-select");
// var userGym = userSelect.options[userSelect.selectedIndex].value;

// $("#gym-select").change(function () {
//   alert($(this).val());
// });

// document.getElementById("gym-select").addEventListener("change", function () {
//   console.log("You selected: ", this.value);
// });

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
  console.log(req.body.gym-select);
  if (userGym === 3)
  {
    const gymData = await crossfit307Scraper.scrapesite(req.body.gymURL);
    const gyms = await db.insertGym(
      gymData.date,
      gymData.wod,
      req.body.gymURL
    );
    res.send(creators);
  }
  else {
    console.log("your if statement didn't work")
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
