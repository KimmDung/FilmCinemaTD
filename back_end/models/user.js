const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
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
        type : Number,
    },
    birthday: {
        type : Date,
    },
    address: {
        type : String,
    },
},  { timestamps: true }
);

let User = mongoose.model('User',userSchema);
module.exports = User;