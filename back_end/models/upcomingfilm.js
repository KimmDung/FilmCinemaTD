const mongoose = require('mongoose');

const upcomingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    description: {
        description: String,
    },
    opening: {
        type: String,
    },
    country: {
        type: String,
    }
});

let Upcoming = mongoose.model('Upcoming', upcomingSchema);
module.exports = Upcoming;