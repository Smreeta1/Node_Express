var express = require('express');
var router = express.Router();
var books=require('../Resources/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BookApp',bookList: books}); //index.ejs
});

module.exports = router;
