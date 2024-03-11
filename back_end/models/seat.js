const mongoose = require('mongoose')    

const seatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    typename: {
        type: mongoose.Schema.Types.Mixed,
    }
});

let Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;

