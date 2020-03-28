function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesPlayedPerYear2(data.mostWins);
  visualizeMatchesPlayedPerYear3(data.extraRuns);
  visualizeMatchesPlayedPerYear4(data.topEconomicalBowler);
  visualizeMatchesPlayedPerYear5(data.mostmatchesWonAtVenue);
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

function visualizeMatchesPlayedPerYear2(mostWins) {
  const seriesData = [];
  for (let year in mostWins) {
    seriesData.push([year, mostWins[year]]);
  }
  Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: seriesData
    }]
  });
}

function visualizeMatchesPlayedPerYear3(extraRuns) {
  const seriesData = [];
  for (let year in extraRuns) {
    seriesData.push([year, extraRuns[year]]);
  }
  Highcharts.chart("container2", {
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

function visualizeMatchesPlayedPerYear4(topEconomicalBowler) {
  const seriesData1 = [];
  for (let year in topEconomicalBowler) {
    seriesData1.push([year, topEconomicalBowler[year]]);
  }
  Highcharts.chart("container3", {
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
        data: seriesData1
      }
    ]
  });
}

function visualizeMatchesPlayedPerYear5(mostmatchesWonAtVenue) {
  const seriesData = [];
  for (let venue in mostmatchesWonAtVenue) {
    seriesData.push([year, topEconomicalBowler[venue]]);
  }
Highcharts.chart('container4', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Stacked bar chart'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total fruit consumption'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
    data= seriesData
  }]
});
}