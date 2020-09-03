var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var xss = req.query.xss
  res.render('index', { title: 'Express',xss:xss});
});

module.exports = router;
