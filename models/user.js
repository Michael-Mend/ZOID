const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    following: [],

    saved: [],

    username: {
        type: String,
        required: true,
        trim: true,
    },

})

const User = mongoose.model('User', UserSchema)

module.exports = User;