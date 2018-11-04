var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('edit.ejs', { title: 'Express' });
  res.status(200).end();
});

module.exports = router;