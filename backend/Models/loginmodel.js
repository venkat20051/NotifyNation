const express = require('express');
const mongoose = require('mongoose');

const Iship = new mongoose.Schema(
    {
        "name" :{
            type : String,
        },
        "email" :{
            type : String,
        },
        "password" : {
            type : String,
        }
    }
)
module.exports = mongoose.model("Iship",Iship);