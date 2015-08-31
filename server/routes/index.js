var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var Submission = function(name, url, image) {
  this.githubName = name,
  this.githubURL = url,
  this.githubImage = image;
};

module.exports = router;
