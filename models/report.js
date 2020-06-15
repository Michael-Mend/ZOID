const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    postID: {
        type: String,
        required: true,
        trim: true,
    },

    following: {
        type: String,
        required: true,
        trim: true,
    },

})

const Report = mongoose.model('Report', ReportSchema)

module.exports = Report;