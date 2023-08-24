const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Weather title is required!!!"],
        maxlength: [30, "The title's length can be no more than 30 characters!"]
    },
    Location: {
        type: String,
        required: [true, "Weather Location is required!!!"],
    }
}, { timestamps: true })

module.exports = mongoose.model('Weather', WeatherSchema);

