var express = require("express");
var dotenv = require("dotenv");
var path = require('path');
dotenv.config();
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const fun = async (req, res, validationResults,email) => {
  const {  maths, science, english, general_awareness } = validationResults ; // Ensure these values are passed in the request
  const mail = email;
  const totalScore = maths + science + english +general_awareness;
  console.log(validationResults)
  const tableHTML = `
    <h3>Your Exam Results</h3>
    <p>Thank you for participating! Here are your scores:</p>
    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Total Marks</th>
          <th>Marks Scored</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maths</td>
          <td>100</td>
          <td>${maths}</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>100</td>
           <td>${science}</td>
        </tr>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>${english}</td>
        </tr>
        <tr>
          <td>General Awareness</td>
          <td>100</td>
          <td>${general_awareness}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>400</td>
          <td><strong>${totalScore}</strong></td>
        </tr>
      </tbody>
    </table>
    <p>Keep up the great work!</p>
  `;

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: mail,
    subject: "Your Exam Results",
    html: tableHTML 
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      console.log("Email sent successfully");
      return res.status(200).json({ message: "Email sent successfully", info });
    }
  });
};

exports.fun = fun;
