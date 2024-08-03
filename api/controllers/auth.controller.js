const User = require("../models/user.model");
const AppError = require("../utils/error");


exports.signUp = async (req, res, next) => {
    const { name, username, email, password } = req.body;
    try {
        await User.create({ name, username, email, password });
        res.status(201).json({ success: true, statusCode: 201, message: "User Created Successfully" })
    } catch (error) {

        next(error)
    }

}
exports.login = (req, res) => {
    res.status(400).json({ message: "This Router Is Work" })
}
