const express = require('express');
const Route = express.Router();
const EntireController = require("../Controllers/FirstController");
const Upload = require("../Controllers/student");
const { validateAnswers } = require('../Controllers/answersvalidation'); // Ensure correct import
const {mailsender} = require("../Controllers/mailsender")
const Subjects=require("../Controllers/english");
const GetPdf = require('../Controllers/getpdfcontroller')
const Testing = require('../Controllers/SignUPController'); 
const Login = require('../Controllers/SigninController');
const SendingData=require("../Controllers/FormDetails");
const DashBoard=require("../Controllers/Dashboard");
// Test API Route
Route.post("/Testing-Api", EntireController.DSP); // Ensure DSP is a function

// Validate Answers Route
Route.post('/validate-answers', validateAnswers); // Ensure validateAnswers is a function

// Questions Route
Route.post('/api/questions', EntireController.Questions); // Ensure Questions is a function

// File Upload Route
Route.post('/upload', Upload.FileUpload); // Ensure FileUpload is a function
//mail sending
Route.post('/Email-sending', mailsender)
//english api
Route.get('/Subjects-data',Subjects.SendData);
Route.get('/api/download/:filename', GetPdf.GetPdf);
Route.post('/get', Testing.Test);
Route.post('/login', Login.login);
// Export the router

// Route.get('/api/download/:filename',EntireController.GetPdf);
// Route.post("/formdata",SendingData.SendData);
// Route.post('/registerUser',SendingData.SendData);
// Route.get("/getUser/:id",SendingData.GetData);
Route.post('/registerUser',SendingData.SendData);
Route.get('/getUser/:registrationnumber',SendingData.GetData);
Route.post('/candidate',SendingData.GetHallTicketDetails);
Route.post('/saveUserData',DashBoard.DashBordSaving);
Route.post('/getUserData/:username',DashBoard.GetingDataByUserName);
Route.get('/api/getPosts/:username',DashBoard.GetingDataByPosts);
Route.post('/checkApplication',DashBoard.GettingUserPost)
module.exports = Route;
