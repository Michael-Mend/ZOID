const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/zoid',  { useNewUrlParser: true });

app.use('/api', require('./routes/post.js'));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
