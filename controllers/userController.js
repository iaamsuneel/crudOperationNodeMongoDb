const { json } = require('body-parser');
const User = require('../models/User');
// getAllUser
const user_all = async (req, res) => {
    try {
        const userDate = await User.find();
        res.json(userDate);
        console.log(userDate);
    } catch (error) {
        res.json({ message: error });
    }
};
//getSingle
const user_details = async (req, res) => {

    try {
        const id = req.params.userId;
        const userDetails = await User.findById(id)
        res.json(userDetails);
        console.log(userDetails);

    } catch (error) {
        res.json({ message: error });
    }
}
//addNewUser
const user_create = async (req, res) => {
    const user = new User({
        name: req.body.name,
        price: req.body.price,
        address: req.body.address
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
        console.log(savedUser);
    } catch (error) {
        res.status(400).send(error)
    }
};
//updateUser
const user_update = async (req, res) => {
    try {
        const userUpdate = {
            name: req.body.name,
            price: req.body.price,
            address: req.body.address
        }
        const updateData = await User.findByIdAndUpdate({ _id: req.params.Id }, userUpdate);
        res.json(updateData);
        console.log(updateData)
    } catch (error) {
        res.json({ message: error })
    }
};


//deleteUser
const user_delete = async (req, res) => {
    try {
        const removeuser = await User.findByIdAndDelete(req.params.Id);
        res.json(removeuser);
    } catch (error) {
        res.json({ message: error });
    }
};
module.exports = {
    user_all,
    user_details,
    user_create,
    user_update,
    user_delete
}