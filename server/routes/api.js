const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
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

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorization request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

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
            let payload = { subject: registerUser._id };
            let token = jwt.sign(payload, 'secretKey');
            res.status(201).send({ token });
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
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({ token });
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
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-05-23T21:32:42.235Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-14-23T21:32:42.235Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-12-23T21:32:42.235Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-23-23T21:32:42.235Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-29-23T21:32:42.235Z"
        },
        {
            "_id": "7",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-18-23T21:32:42.235Z"
        },
        {
            "_id": "8",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-24-23T21:32:42.235Z"
        },
        {
            "_id": "9",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-14-23T21:32:42.235Z"
        },
        {
            "_id": "10",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
    ]
    res.json(events)
})

router.get("/special",verifyToken, (req, res) =>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-14-23T21:32:42.235Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-14-23T21:32:42.235Z"
        },
        {
            "_id": "7",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-04-23T21:32:42.235Z"
        },
        {
            "_id": "8",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-06-23T21:32:42.235Z"
        },
        {
            "_id": "9",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-09-23T21:32:42.235Z"
        },
        {
            "_id": "10",
            "name": "Auto Expo",
            "description": "lkcnfmkcmc",
            "date": "2021-01-23T21:32:42.235Z"
        },
    ]
    res.json(events)
})

module.exports = router