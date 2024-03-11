const mongoose = require('mongoose');

const typeseatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    }
});

let TypeSeat = mongoose.model('TypeSeat', typeseatSchema);
module.exports = TypeSeat;

