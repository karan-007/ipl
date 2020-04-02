const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const mostWins = require("./ipl/mostWins");
const mostWinsPerSeason = require("./ipl//mostWinsPerSeason");
const extraRuns = require("./ipl/extraRuns");
const topEconomicalBowler = require("./ipl/topEconomicalBowler");
const mostMatchesWonAtVenues = require("./ipl/mostMatchesWonAtVenue");
const dlWinner = require("./ipl/dlWinner");
const mostManOfMatches = require("./ipl/mostManOfMatches");
const mostMatchesWonPerSeason = require("./ipl/mostMatchesWonInSeason");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended:false}));

let allMatches={};
let allDeliveries={};
csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      allMatches=matches;
      allDeliveries=deliveries;
    });
});

app.get('/economy', (req, res) => {
  const season = req.query.season;
  const result = extraRuns(allMatches,allDeliveries,season);
  res.send(result)
})

const port= process.env.PORT || 8080;
app.listen(port,() =>{
  console.log("server is running")
})

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
      let result = matchesPlayedPerYear(matches);
      let result1 = mostWins(matches);
      let result2 = mostWinsPerSeason(matches);
      let result4 = topEconomicalBowler(matches,deliveries,'2016');
      let result5 = mostMatchesWonAtVenues(matches);
      let result6 = dlWinner(matches);
      let result7 = mostManOfMatches(matches);
      let result8 = mostMatchesWonPerSeason(matches);
      saveMatchesPlayedPerYear(result,result1,result2,result4,result5,result6,result7,result8);
    });
    });
}

function saveMatchesPlayedPerYear(result,result1,result2,result4,result5,result6,result7,result8) {
  const jsonData = {
    matchesPlayedPerYear: result,
    mostWins:result1,
    mostWinsPerSeason:result2,
    topEconomicalBowler:result4,
    mostmatchesWonAtVenue:result5,
    mostDlWinner:result6,
    mostManOfMatches:result7,
    mostMatchesWonPerSeason: result8
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
