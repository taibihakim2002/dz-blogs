const validator = require('validator');
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field Is Required"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
    },
    username: {
        type: String,
        required: [true, "username Is required"],
        unique: [true, 'Username Must be unique'],
        mixlength: [4, "username must be at lease 4 caracters"],
        maxlength: [20, 'Username cannot be more than 20 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true, // Converts email to lowercase
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"]
    }
}, { timestamps: true })


userSchema.pre('save', async function (next) {
    // Check if password is modified
    if (!this.isModified('password')) return next();

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err); // Pass any errors to the next middleware
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;