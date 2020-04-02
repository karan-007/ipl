var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended:false}));

let port= process.env.PORT || 8080
app.listen(port,() =>{
  console.log("server is running"+port)
})


// app.get('/economy', (req, res) => {
//   const season = req.query.season;
//   const result = extraRuns(allMatches,allDeliveries,season);
//   res.send(result)
// })




