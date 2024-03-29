const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    reviewBody:{
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;