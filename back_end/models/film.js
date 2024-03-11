const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    genres: {
        type: [String],
    },
    rate: {
        type: Number,
    },
    description: {
        type: String,
    },
    opening: {
        type: String,
    },
    country: {
        type: String,
    },
    times: {
        type: [String],
    },
    type: {
        type: String,
    },
    favorite: {
        type: Boolean,
    }
});

let Film = mongoose.model('Film', filmSchema);
module.exports = Film;
