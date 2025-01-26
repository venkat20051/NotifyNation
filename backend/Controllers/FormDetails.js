

const express = require('express');
const FormData = require("../Models/Applicationform");
const Details = require("../Models/Applicationform");
const SendData = async (req, res) => {
    try {
        const data = req.body;
        // console.log('Data received:', data);
        // const lastEntry = await Details.findOne().sort({ registrationnumber: -1 });
        // const newRegistrationNumber = lastEntry 
        //     ? lastEntry.registrationnumber + 1 
        //     : 100000000000;
        let newRegistrationNumber = 0;
        do {
            newRegistrationNumber = 0;
            for (let i = 0; i < 12; i++) {
                newRegistrationNumber = newRegistrationNumber * 10 + Math.floor(Math.random() * 10);
            }
        } while (!Details.find({ registrationnumber: newRegistrationNumber })); 

        const newDetails = new Details({
            ...data,
            registrationnumber: newRegistrationNumber
        });

        console.log('New Details to Save:', newDetails);

        await newDetails.save();
        console.log('Data saved to MongoDB');

        res.status(201).json({ message: 'Data inserted successfully', newDetails });
    } catch (err) {
        console.error("Error inserting data: ", err);
        res.status(500).json({ message: 'Error inserting data', error: err.message });
    }    
};
  


const GetData = async (req, res) => {
    try {
        const regNumber = req.params.registrationnumber;
        console.log('Fetching user with registration number:', regNumber);
        
        const user = await Details.findOne({ registrationnumber: regNumber });

        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Fetched user:', user);
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

const GetHallTicketDetails = async (req, res) => {
    const { RegistrationId, DateOfBirth, Exam } = req.body;

  
    const numericRegistrationId = Number(RegistrationId);

    console.log(numericRegistrationId+" "+DateOfBirth+" "+Exam)
        const user = await Details.find({
            registrationnumber: numericRegistrationId,
            dob:DateOfBirth,
            post:Exam
           
        });
        console.log('User:', user);
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ error: 'Candidate not found' });
        }
};

exports.SendData = SendData;
exports.GetData = GetData;
exports.GetHallTicketDetails = GetHallTicketDetails;
