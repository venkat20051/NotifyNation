const express = require('express')
const nodemailer = require('nodemailer')
const Mail = require('nodemailer/lib/mailer')

const MailSender = (req,res) => {
    const Tranporter = nodemailer.createTransport({
        service :'gmail',
        auth :{
            user : "ganapathisai548@gmail.com",
            pass : "akxo izsl umzv cezy"
        }
    })
    const MailOptions = {
        from : "ganapathisai548@gmail.com",
        to:req.body.email,
        subject:"Checking Nodemailer",
        text : "It is Working"
    }

    Tranporter.sendMail(MailOptions,(err,info) => {
        if (err)
        {
            return res.status(500).json(err)
        }
        return res.status(200).json('Mail Sent Successfully')
    })
}

exports.MailSender = MailSender;
