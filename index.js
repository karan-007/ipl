const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const mostWins = require("./ipl/mostWins");
const mostWinsPerSeason = require("./ipl//mostWinsPerSeason");
const extraRuns = require("./ipl/extraRuns");
const topEconomicalBowler = require("./ipl/topEconomicalBowler");
const mostMatchesWonAtVenues = require("./ipl/mostMatchesWonAtVenue");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          //console.log(deliveries.slice(0,2));
      let result = matchesPlayedPerYear(matches);
      let result1 = mostWins(matches);
      let result2 = mostWinsPerSeason(matches);
      let result3 = extraRuns(matches,deliveries,'2016');
      let result4 = topEconomicalBowler(matches,deliveries,'2016');
      let result5 = mostMatchesWonAtVenues(matches);
      saveMatchesPlayedPerYear(result,result1,result2,result3,result4,result5);
    });
    });
}

function saveMatchesPlayedPerYear(result,result1,result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result,
    mostWins:result1,
    mostWinsPerSeason:result2,
    extraRuns:result3,
    topEconomicalBowler:result4,
    mostmatchesWonAtVenue:result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
