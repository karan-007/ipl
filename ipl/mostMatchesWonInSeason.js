function mostMatchesWonPerSeason(matches) {
  let result = {};
  let years = [];
  for (let match of matches) {
    if (!years.includes(match.season)) {
      years.push(match.season);
    }
  }
  years.forEach(year => {
    result[year] = getResults(matches, year);
  });
  return result;

  function getResults(matches, year) {
    let matchesWon = {};
    for (let match of matches) {
      let team = match.winner;
      let season = match.season;
      if (season === year && team) {
        matchesWon[team] = (matchesWon[team] || 0) + 1;
      }
    }
    var sortable = [];
    for (var team in matchesWon) {
      sortable.push([team, parseFloat(matchesWon[team])]);
    }

    sortable.sort(function(a, b) {
      return b[1] - a[1];
    });
    //console.log(sortable)
    sortable = sortable.slice(0, 1);

    var objSorted = {};
    sortable.forEach(function(item) {
      objSorted[item[0]] = parseFloat(item[1].toFixed(2));
    });
    //console.log(objSorted);
    return objSorted;
  }
}

module.exports = mostMatchesWonPerSeason;
