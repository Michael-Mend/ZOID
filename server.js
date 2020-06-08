const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(logger('dev'));
app.use(function( res ) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/zoid',  { useNewUrlParser: true });

app.use(require('./routes/post.js'));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
