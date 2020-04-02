let year = 0
function showData() {
  year = document.getElementById("seasons1").value;
  fetch("./extraRuns.json")
    .then(resp => resp.json())
    .then(visualizeData)
    }

function visualizeData(data){
    visualizeExtraRuns(data.extraRuns)
}

      function visualizeExtraRuns(extraRuns) {
          data={}
        const seriesData = [];
        for(let season in extraRuns){
            if(season === year){
                data=extraRuns[season]
            }
        }
        for(let team in data){
            seriesData.push([team,data[team]]);
        }
        console.log(data)
        Highcharts.chart("container2", {
          chart: {
            type: "column"
          },
          title: {
            text: `Extra Runs Conceded By Each Team in ${year}`
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
              text: "Extra Runs"
            }
          },
          series: [
            {
              name: "Extra Runs",
              data: seriesData
            }
          ]
        });
      }
    
    

