var someObject = require('./extraRuns.json')

var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/economy', (req, res) => {
  const season = req.query.season;
  const result = someObject.extraRuns[season];
  res.send(result)
})

const port= process.env.PORT || 8080;
app.listen(port,() =>{
  console.log("server is running")
})