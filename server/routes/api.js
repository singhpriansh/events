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

router.get("/events", (req, res) =>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "7",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "8",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "9",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "10",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
    ]
    res.json(events)
})

router.get("/special", (req, res) =>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "7",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "8",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "9",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
        {
            "_id": "10",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-0423T21:32:235Z"
        },
    ]
    res.json(events)
})

module.exports = router