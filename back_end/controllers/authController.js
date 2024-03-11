const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { json } = require('body-parser');
const Cart = require('../models/cart');
const BookStick = require('../models/bookstick');

dotenv.config();

const authController = {
    // Register 

    registerUser : async (req,res) => {
        try {
            const countEmail = await User.countDocuments({ email:req.body.email });
            if (countEmail == 0) { // ktr email đã được đăng kí trước đó chưa nếu chưa có thì tiếp tục, trường hợp này là chưa có và tiếp tục
                const newUser = await User.create(req.body); // req.body dữ liệu người dùng đucợ gửi từ client

                const createBookStick = await BookStick.create({idUser: newUser._id});  // tạo một đặt vé mới từ model BookStick
                console.log(createBookStick);

                res.status(200).json(true); // thành công
            }
            else {
                res.status(200).json(false);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },


    // Login
    loginUser : async (req,res) => {
        try {
            const user = await User.findOne({ // findOne tìm kiếm tài khoản người dùng  với username và psw yêu cầu
                username: req.body.username,
                psw: req.body.psw,
                phone: req.body.phone});
            if (user) { // user !== null người dùng tồn tại trong CSDL
                var token = jwt.sign({id: user._id},process.env.JWT_ACCESS_KEY); // sign() phương thức signature 
                res.json(token);
            }     
            else { // user === null người dùng không tồn tại trong CSDL
                res.json(false);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // kiểm tra thông tin đăng nhập có trùng khớp với thông tin đăng ký ko
    getloginUser: async(req,res) => { // xử lý yêu cầu từ phía người dùng và gửi lại kết quả
        try {
            const obj  = jwt.verify(req.query.token, process.env.JWT_ACCESS_KEY)
            var user = await User.findOne({_id: obj.id}).select("-psw -createdAt -updatedAt -_id")
            var bookstick = await BookStick.findOne({idUser: obj.id});
           
            if(user){
                res.json({user:user, idBookStick: bookstick._id})
            } else {
                res.json(false)
            }
        } catch(e){
            console.log(e)
        }
    }, 
};

module.exports = authController;