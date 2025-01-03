const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create database connection
mongoose.connect('mongodb+srv://faiaz:nirob112233@cluster0.8qjqb.mongodb.net/',)
.then(() => 
    console.log('MongoDB connected'))
.catch((error) => 
    console.error('MongoDB connection error:', error));

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST','DELETE','PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true
    })
)
app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log(`server is running on the port ${PORT}`))