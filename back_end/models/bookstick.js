const mongoose = require('mongoose');

const bookstickSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    idFilm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    },
    idSeat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat"
    },
    idTypeseat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeSeat"
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    psw: {
        type : String,
        required : true,
    },
    phone: {
        type : String,
        required : true,
        unique : true,
    },
    birthday: {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
    },
},  { timestamps: true }
);

let BookStick = mongoose.model('BookStick', bookstickSchema);
module.exports = BookStick;