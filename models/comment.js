const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        minlength: 20,
        trim: true,
        maxlength: 1000
    }
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;