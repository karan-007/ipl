function extraRuns(matches, deliveries) {
  //count=0
  
  result = {};
  seasons = [];
  for (let match of matches) {
    if (!seasons.includes(match.season)) {
      seasons.push(match.season);
    }
  }

  seasons.forEach(year => {
    result[year] = getResults(matches, year, deliveries);
  });
  return result;
  function getResults(matches, year, deliveries) {
    id = [];
    resultMatch={};
    for (let match of matches) {
      if (match.season === year) {
        id.push(match.id);
      }
    }
    for (let i of id) {
      for (let delivery of deliveries) {
        if (delivery.match_id === i) {
          team = delivery.bowling_team;
          if (resultMatch[team]) {
            resultMatch[team] += parseInt(delivery.extra_runs);
          } else {
            resultMatch[team] = parseInt(delivery.extra_runs);
          }
        }
      }
    }
    return resultMatch;
  }
}
module.exports = extraRuns;
