var express = require('express');
var router = express.Router();
var runner = require('../../Database/runs_query.js');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var data = req.body;
  var PID = data.PID;
  var Disc = data.Disc;
  var SDate = data.SDate;
  var EDate = data.Edate;
  var PName = data.PName;
  var SClub = data.SClub;
  var SIG= data.SIG;
  var Details = data.Details;
  var Num = data.Number;
  
  var query = "INSERT INTO Project values("+"\""+PID+"\",\""+Disc+"\",\""+SDate+"\",\""+EDate+"\",\""+PName+"\",\""+SClub+"\",\""+SIG+"\",\""+Details+"\","+Num+")";
  console.log(query);
  

  runner.result(query);
  res.render('done.html', { title: 'Express' });
  res.status(200).end();
});

module.exports = router;