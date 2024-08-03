const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


// Import Routes
const userRouter = require("./routers/user.router");
const { globalErrorHandled } = require('./controllers/error.controller');


const app = express();
app.use(express.json())

// Connect To DB
const DB = process.env.MONGO_STRING;
const DB_USER = process.env.MONGO_USER;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
let string = DB.replace('<USERNAME>', DB_USER).replace("<PASSWORD>", DB_PASSWORD);

mongoose.connect(string).then(() => {
    console.log("DB Connected")
}).catch((err) => {

    console.log("Error When Connect To DB")
})

app.use("/api/v1/users", userRouter)

// Global Error Handler
app.use(globalErrorHandled)
app.listen(3000, () => {
    console.log("I am Listining...")
})