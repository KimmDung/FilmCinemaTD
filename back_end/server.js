const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// router



// Connect Database with Mongoose
mongoose.connect("mongodb+srv://ThanhDung:ThanhDung151102@cluster0.qsazk4u.mongodb.net/").then(()=>{
    console.log('Kết nối thành công');
}).catch(()=>{console.log('Kết nối thất bại')})
//-------------------------------------------
// const createMongoose = require('./data/dataFilm');



app.listen(4000, () => {
    console.log('Server is running...');
})