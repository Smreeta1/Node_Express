var express = require('express');
var router = express.Router();

// var books=require('../Resources/books');//accessing json resource
var Book=require('../models/book');//accessing db books

/* GET home page. */
router.get('/', async function(req, res, next) {
  const books=await Book.find();
  res.render('index', { title: 'BookApp',bookList: books}); //index.ejs
});

module.exports = router;
