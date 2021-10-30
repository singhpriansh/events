const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const db = "mongodb+srv://secureuser:FCIokCNFUgMqkelI@cluster0.c7q1k.mongodb.net/node-angular?retryWrites=true&w=majority"
mongoose.connect(db)
    .then(() => {
        console.log('Connected to the database!')
    })
    .catch(() => {
        console.log('Connection failed!')
    });


router.get("/",(req,res)=>{
    res.send("From API route")
})

module.exports = router