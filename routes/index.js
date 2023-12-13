var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});
module.exports = router;

router.get('/register', function(req, res, next) {
  res.render('register');
});
module.exports = router;
