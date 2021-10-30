const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const user = require('../models/user');
const User = require('../models/user');

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

router.post("/register",(req,res) =>{
    let userDate = req.body;
    let user = new User(userDate);
    user.save((error, registerUser) =>{
        if(error){
            console.log(error)
        }else{
            res.status(201).send(registerUser)
        }
    })
})

router.post("/login", (req, res) =>{
    let userDate = req.body
    user.findOne({email: userDate.email},(error, user) =>{
        if (error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send("Invalid email")
            }else{
                if(user.password !== userDate.password){
                    res.status(401).send('Invalid password')
                }else{
                    res.status(200).send(user)
                }
            }
        }
    })
})

module.exports = router