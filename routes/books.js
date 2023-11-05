var express = require('express');
var router = express.Router();
// var books =require('../Resources/books')
var Book =require('../models/book')

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('addbooks', { title: 'Addbooks'});//displays
});
// router.post('/save',function(req,res,next){
//     books.push({...req.body,_id:`00${books.length +1}`})
//     res.redirect('/');
// })
router.post('/save', async function (req, res) {   //book is added to database
  await Book.insertMany([ { ...req.body }]) //no insertOne function..not built
  res.redirect('/');
})

    // router.get('/edit/:_id',function(req, res, next){
     
    //     const book =books.find((book)=>{
    //         book._id===req.params._id
    //         res.render('editbooks', { title:"edit books",book})

    //     })
    // })

    router.get('/edit/:_id', function(req, res, next){
        const book = books.find((book)=>book._id === req.params._id)
        res.render('editBooks', {title: "Edit Books", book})
      })
      
    router.post('/saveEdited/:_id', function(req, res, next){
        const currIndex = books.findIndex((book)=>book._id === req.params._id)
        books.splice(currIndex, 1, {...req.body, _id: req.params._id})
        res.redirect('/')
      })

      // router.get('/remove/:_id', async function (req, res) {
      //   console.log(req.params._id);
      //   await Book.findOneAndRemove({ _id: req.params._id })
      //   const books = await Book.find()
      //   res.render('index', { title: 'Book App', bookList: books, redirectUrl: '/' });
      // })
      router.get('/remove/:_id', async function (req, res) {
        console.log(req.params._id);
        await Book.findOneAndDelete({ _id: req.params._id }); // Use findOneAndDelete instead
        const books = await Book.find();
        res.render('index', { title: 'Book App', bookList: books, redirectUrl: '/' });
      });
      
module.exports = router;


