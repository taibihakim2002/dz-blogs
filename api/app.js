const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

const DB = process.env.MONGO_STRING;
const DB_USER = process.env.MONGO_USER;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
let string = DB.replace('<USERNAME>', DB_USER).replace("<PASSWORD>", DB_PASSWORD);

mongoose.connect(string).then(() => {
    console.log("DB Connected")
}).catch(() => {
    console.log("Error When Connect To DB")
})


app.listen(3000, () => {
    console.log("I am Listining...")
})