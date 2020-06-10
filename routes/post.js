const app = require("express").Router();
const Post = require("../models/post");
const Comment = require("../models/comment");

app.get('/posts', (req, res) => {
    Post.find({})
        .then(posts => {
            res.json(posts);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.get('/myposts/:username', (req, res) => {
    console.log(req.params.username)
    Post.find({ username: req.params.username})
        .then(posts => {
            res.json(posts);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.post('/newpost', (req, res) => {
    Post.create(req.body)
        .then(post => {
            console.log(post)
            res.json(post);
         })
        .catch(err => {
            res.status(400).json(err);
        })
})

app.post('/comment', (req, res) =>{
    console.log(req.body)
    Comment.create(req.body)
    .then(post => {
        console.log(post)
        res.json(post);
     })
    .catch(err => {
        console.log(err)
    })
        
})

app.get('/comment/:id', (req, res) => {
    Comment.find({ postID: req.params.id})
        .then(comments => {
            res.json(comments);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id)
    Post.deleteOne({_id: req.params.id})
        .catch(err => {
            res.status(400).json(err);
        })
        
})

module.exports = app;