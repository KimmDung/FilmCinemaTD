const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
    // Get all users
    getAllUsers: async(req,res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete user
    deleteUser: async(req,res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted user successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = userController;