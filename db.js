const mongoose = require('mongoose');//mongoose package

mongoose.connect('mongodb://localhost/books'); // mongoose package has connect function

const db = mongoose.connection;

db.on('error', (err) => console.log('MongoDB error occured:', err))
db.once('open', () => {
  console.log('Connected to MongoDB')
})