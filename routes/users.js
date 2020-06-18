var express = require('express');
var router = express.Router();

var Response = require('./../dto/response');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = new Response({ foo: 12, bar: 'Chitchat user' });
  res.json(data);
});

module.exports = router;
