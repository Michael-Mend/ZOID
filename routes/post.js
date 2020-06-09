const app = require("express").Router();
const Post = require("../models/post");

app.get('/posts', (req, res) => {
    Post.find({})
        .then(posts => {
            res.json(posts);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.post('/newpost', (req, res) => {
    Post.create(req.body)
        .then(posts => {
            console.log(posts)
            res.json(posts);
         })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = app;