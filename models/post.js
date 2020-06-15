const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {
        type: String,
    },

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 1000
    },

    tag: {
        type: String,
        trim: true,
    },

    image_link: {
        type: String,
        trim: true,
    },

    file_link: {
        type: String,
        trim: true,
    },

    likes: {
        type: Number,
        trim: true,
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;