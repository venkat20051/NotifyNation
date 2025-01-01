const express = require('express');
const mongoose = require('mongoose');

const DashData = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    username:{
        type:String,
        default:""
    },
    email: {
        type: String,
        default: ""
    },
    dob: {
        type: String,
        default: "",
    },
    motherName: {
        type: String,
        default: "",
    },
    fatherName: {
        type: String,
        default: "",
    },
    mobileNumber: {
        type: String,
        default: "",
    },
    maritalstatus: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        default: "",
    },
    schoolName10th: {
        type: String,
        default: "",
    },
    board10th: {
        type: String,
        default: "",
    },
    passingYear10th: {
        type: String,
        default: "",
    },
    obtainedMarks10th: {
        type: String,
        default: "",
    },
    schoolName12th: {
        type: String,
        default: "",
    },
    board12th: {
        type: String,
        default: "",
    },
    passingYear12th: {
        type: String,
        default: "",
    },
    obtainedMarks12th: {
        type: String,
        default: "",
    }
})
module.exports = mongoose.model("DashData",DashData);