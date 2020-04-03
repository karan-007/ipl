function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMostWins(data.mostWins);
  visualizeTopEconomicalBowler(data.topEconomicalBowler);
  visualizeMostMatchesWonAtVenue(data.mostmatchesWonAtVenue, data.mostWins);
  visualizemostWinsPerSeason(data.mostWinsPerSeason, data.mostWins);
  visualizemostDlWinner(data.mostDlWinner);
  visualizemostManOfMatches(data.mostManOfMatches);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "years"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Matches",
        data: seriesData
      }
    ]
  });
}

function visualizeMostWins(mostWins) {
  const seriesData = [];
  for (let year in mostWins) {
    seriesData.push([year, mostWins[year]]);
  }
  Highcharts.chart("container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Wins By All the Teams"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "Matches Won",
        colorByPoint: true,
        data: seriesData
      }
    ]
  });
}



function visualizeTopEconomicalBowler(topEconomicalBowler) {
  const seriesData = [];
  for (let year in topEconomicalBowler) {
    seriesData.push([year, parseFloat(topEconomicalBowler[year])]);
  }
  Highcharts.chart("container3", {
    chart: {
      type: "column"
    },
    title: {
      text: "Best Economy in Season 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Players"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Economy",
        data: seriesData
      }
    ]
  });
}

function visualizeMostMatchesWonAtVenue(mostmatchesWonAtVenue, mostWins) {
  const venues = Object.keys(mostmatchesWonAtVenue);
  const teams = Object.keys(mostWins);
  let seriesData = [];
  seriesData = teams.map(team => ({
    name: team,
    data: venues.map(v => mostmatchesWonAtVenue[v][team] || 0)
  }));

  Highcharts.chart("container4", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Total Wins For Each Team At Venue"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      categories: venues
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Wins"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: seriesData
  });
}

function visualizemostWinsPerSeason(mostWinsPerSeason, mostWins) {
  const teams = Object.keys(mostWins);
  const seasons=Object.keys(mostWinsPerSeason);
  let seriesData=[];
  seriesData = teams.map(team => ({
    name: team,
    data: seasons.map(season => mostWinsPerSeason[season][team] || 0)
  }));

  Highcharts.chart('container5', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Wins Per Team Per Season'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Teams"
      },
        categories: seasons,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Wins'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
});
}

function visualizemostDlWinner(mostDlWinner) {
  const seriesData = [];
  for (let team in mostDlWinner) {
    seriesData.push([team, mostDlWinner[team]]);
  }

  Highcharts.chart("container6", {
    chart: {
      type: "column"
    },
    title: {
      text: "Most Matches Won By Teams (DL method)"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Teams"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Matches",
        data: seriesData
      }
    ]
  });
}

function visualizemostManOfMatches(mostManOfMatches) {
  const seriesData = [];
  for (let player in mostManOfMatches) {
    seriesData.push([player, mostManOfMatches[player]]);
  }
Highcharts.chart('container7', {
  chart: {
    type: 'column'
  },
  title: {
      text: 'Most Man of Matches Across All Seasons '
  },

  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },

  xAxis: {
    title: {
      text: "Teams"
    },
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Matches"
    }
  },

  series: [{
      name: 'MOM',
      colorByPoint: true,
      data: seriesData,
      showInLegend: false
  }]

});
}

