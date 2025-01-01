const express=require('express');
const User = require('../Models/Dashboard'); 
const ApplyData=require("../Models/Applicationform");

const DashBordSaving = async (req, res) => {
    try {
        console.log(req.body); 
        const { username, ...data } = req.body;
        const user = await User.findOneAndUpdate(
            { username },
            data,
            { upsert: true, new: true }
        );
        res.status(200).json(user);
    } catch (error) {
        console.error('Error saving user data:', error); 
        res.status(500).json({ error: 'Failed to save user data' });
    }
};

const GetingDataByPosts=async(req,res)=>{
    try {
        const { username } = req.params; // Extracting the username from the request parameters
        console.log("Requested username:", username);

        // Use `find` with projection to get only specific fields
        const userPosts = await ApplyData.find(
            { username: username }, // Filter condition to find posts for the given username
            { username: 1, post: 1 } // Projection to include only the username and post fields
        );

        console.log(userPosts); // Logging the retrieved user posts

        // If no posts found, send an appropriate message
        if (userPosts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this user.' });
        }

        res.status(200).json(userPosts); // Sends the array of filtered records
    } catch (error) {
        console.error("Error retrieving user data:", error);
        res.status(500).json({ error: 'Failed to retrieve user data' });
    }       
    // try {
    //     const { username } = req.params;
    //     console.log("Requested username:", username); 
    //     const user = await ApplyData.find({ username: req.params.username});
    //     console.log(user);
    //     res.status(200).json(user);
    // } catch (error) {
    //     res.status(500).json({ error: 'Failed to retrieve user data' });
    // }
}

const GettingUserPost=async(req,res)=>{
    const {username,post}=req.body;
    try {
        const existingApplication = await ApplyData.findOne({ username:username, post:post });
        console.log(existingApplication);
        if (existingApplication) {
            res.json({ alreadyApplied: true });
        } else {
            res.json({ alreadyApplied: false });
        }
    } catch (error) {
        console.error("Error applying for post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
 
const GetingDataByUserName=async(req,res)=>{
    try {
        const { username } = req.params;
        console.log("Requested username:", username); 
        const user = await User.findOne({ username: req.params.username });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user data' });
    }
};

exports.DashBordSaving=DashBordSaving;
exports.GetingDataByUserName=GetingDataByUserName;
exports.GetingDataByPosts=GetingDataByPosts;
exports.GettingUserPost=GettingUserPost;