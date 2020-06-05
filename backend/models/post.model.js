const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
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
        minlength: 20,
        trim: true,
        maxlength: 1000
    },

    image_link: {
        type: String,
    },

    file_link: {
        type: String,
    },

    likes: {
        type: Number,
    },

    comments: Array
},{
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;