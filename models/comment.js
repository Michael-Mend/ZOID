const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postID: {
        type: String,
        required: true,
        trim: true
    },

    username: {
        type: String,
        required: true,
        trim: true,
    },

    comment: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        maxlength: 1000
    }
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;