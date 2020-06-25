const express = require('express');
const router = express.Router();

const Response = require('./../dto/response');
const db = require('./../db');

router.get('/', function(req, res, next) {
  const data = new Response({ foo: 12, bar: 'Chitchat user' });
  db.query('SELECT * from foo', [], (err, response) => {
    data.setData(response.rows);
    res.json(data);
  });
});

module.exports = router;
