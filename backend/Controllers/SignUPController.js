
const express = require('express');
const Iship = require('../Models/loginmodel'); 

const testing = async (req, res) => {
    var data = req.body; 

    console.log(data)
    const user = await Iship.find({"email":data.email})
    if(user.length>0){
        console.log(user)
        return res.status(401).json({ "message": 'user already exists' });
    }
    // return res.status(200).json(user[0].name);
   else {Iship.insertMany(data) 
    .then(result => {
        console.log("done")
        return res.status(201).json({"message":"Record added!"});
    })
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    });}

};

exports.Test = testing;
