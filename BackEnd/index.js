const express = require ('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRouter= require('./routes/productRoutes');

const userRouter = require('./routes/userRoutes');

const app = express();

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI,{
  maxPoolSize:10,
});

const db = mongoose.connection;

db.on('error',()=>{
console.log("MongoDB connection error");
});

db.once('open',()=>{
  console.log("Connected to DATABASE Successfully");
});

//app.get('/', function (req, res) {
//    res.send('Hello');
//});

app.use(express.json());

app.use(productRouter);

app.use(userRouter);

app.listen(4000,'0.0.0.0',()=>{
    console.log('Server Started  at port 4000');
});