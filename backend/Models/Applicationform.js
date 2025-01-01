const express =require('express');
const mongoose = require('mongoose');

const Details = new mongoose.Schema({
    registrationnumber: {
        type: Number,
        unique: true, // Ensures no duplicate registration numbers
        required: true // Registration number should be mandatory
    },
    aadhaar: {
        type: String,
        default: ""
    },
    aadhaarNumber: {
        type: String,
        default: ""
    },
    aggregate10th: {
        type: String,
        default: ""
    },
    aggregate12th: {
        type: String,
        default: ""
    },
    aggregateGrad: {
        type: String,
        default: ""
    },
    aggregatePostGrad: {
        type: String,
        default: ""
    },
    board10th: {
        type: String,
        default: ""
    },
    board12th: {
        type: String,
        default: ""
    },
    candidateName: {
        type: String,
        default: ""
    },
    // certificate10th: {
    //     type: String,
    //     default: null
    // },
    // certificate12th: {
    //     type: String,
    //     default: ""
    // },
    // certificateGraduate: {
    //     type: String,
    //     default: ""
    // },
    // certificatePostGraduate: {
    //     type: String,
    //     default: ""
    // },
    collegeNameGrad: {
        type: String,
        default: ""
    },
    collegeNamePostGrad: {
        type: String,
        default: ""
    },
    district: {
        type: String,
        default: ""
    },
    dob: {
        type: String,
        default: ""
    },
    mark:{
        type:String,
        default:""
    },
    emailId: {
        type: String,
        default: ""
    },
    fatherName: {
        type: String,
        default: ""
    },
    maritalstatus: {
        type: String,
        default: ""
    },
    caste: {
        type: String,
        default: ""
    },
    username:{
        type:String,
        default:""
    },
    post:{
        type:String,
        default:""
    },
    gender: {
        type: String,
        default: ""
    },
    graduateName: {
        type: String,
        default: ""
    },
    houseNumber: {
        type: String,
        default: ""
    },
    idCard: {
        type: String,
        default: null
    },
    idNumber: {
        type: String,
        default: ""
    },
    idType: {
        type: String,
        default: ""
    },
    isPermanentSame: {
        type: String,
        default: "yes"
    },
    mobileNumber: {
        type: String,
        default: ""
    },
    motherName: {
        type: String,
        default: ""
    },
    nameChange: {
        type: String,
        default: ""
    },
    obtainedMarks10th: {
        type: String,
        default: ""
    },
    obtainedMarks12th: {
        type: String,
        default: ""
    },
    obtainedMarksGrad: {
        type: String,
        default: ""
    },
    obtainedMarksPostGrad: {
        type: String,
        default: ""
    },
    passingYear10th: {
        type: String,
        default: ""
    },
    passingYear12th: {
        type: String,
        default: ""
    },
    passingYearGrad: {
        type: String,
        default: ""
    },
    passingYearPostGrad: {
        type: String,
        default: ""
    },
    permanentAddress: {
        houseNumber: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        district: {
            type: String,
            default: ""
        },
        postOffice: {
            type: String,
            default: ""
        },
        pin: {
            type: String,
            default: ""
        }
    },
    photo: {
        type: String,
        default: null
    },
    pin: {
        type: String,
        default: ""
    },
    postGraduateName: {
        type: String,
        default: ""
    },
    postOffice: {
        type: String,
        default: ""
    },
    rollNo10th: {
        type: String,
        default: ""
    },
    rollNo12th: {
        type: String,
        default: ""
    },
    rollNoGrad: {
        type: String,
        default: ""
    },
    rollNoPostGrad: {
        type: String,
        default: ""
    },
    schoolName10th: {
        type: String,
        default: ""
    },
    schoolName12th: {
        type: String,
        default: ""
    },
    signature: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: ""
    },
    state10th: {
        type: String,
        default: ""
    },
    state12th: {
        type: String,
        default: ""
    },
    stateGrad: {
        type: String,
        default: ""
    },
    statePostGrad: {
        type: String,
        default: ""
    },
    totalMarks10th: {
        type: String,
        default: ""
    },
    totalMarks12th: {
        type: String,
        default: ""
    },
    totalMarksGrad: {
        type: String,
        default: ""
    },
    totalMarksPostGrad: {
        type: String,
        default: ""
    },
    universityGrad: {
        type: String,
        default: ""
    },
    universityPostGrad: {
        type: String,
        default: ""
    },
    verifyAadhaarNumber: {
        type: String,
        default: ""
    },
    verifyCandidateName: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Details", Details);
