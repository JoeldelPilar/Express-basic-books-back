var express = require('express');
var router = express.Router();

const uuid = require('uuid');
const fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {

  fs.readFile('books.json', function (err, data) {
    if (err) {
      console.log(err);
    }
    const books = JSON.parse(data);
    res.send(books);
  });

});

module.exports = router;
