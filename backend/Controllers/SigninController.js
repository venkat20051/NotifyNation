

const express = require('express');
const Iship = require('../Models/loginmodel');

const login = async (req, res) => {
        const { email, password } = req.body;
        // console.log({email,password})
        const user = await Iship.find({ "email":email, "password" :password})
        if(user.length<=0){
            console.log(!user)
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        return res.status(200).json(user);
  
};

exports.login = login;

    


