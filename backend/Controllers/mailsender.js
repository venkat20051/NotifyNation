const express = require('express')
const nodemailer = require('nodemailer')
const mailsender = (req, res)=>{

    const Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'medmanage.service@gmail.com',
            pass:"pncz oskh jffd ttny"
        }
    });
    const MailOptions={
        from:"medmanage.service@gmail.com",
        to:req.body.email,
        subject:'Placement Cell',
        text:' '

    }
    Transporter.sendMail(MailOptions, (err, info)=>{
        if(err){
            return res.status(500).json(err)
        }
        else{
            return res.status(200).json("mail successfully sent")
        }
    })
}

exports.mailsender=mailsender;