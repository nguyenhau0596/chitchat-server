var express = require('express');
var router = express.Router();

var Response = require('./../dto/response');

router.get('/', function(req, res, next) {
  const data = new Response({}, true, 'Welcome to Chitchat server');
  res.json(data);
});

module.exports = router;
