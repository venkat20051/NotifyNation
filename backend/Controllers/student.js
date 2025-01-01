const express = require('express')

const multer = require('multer')
const path=require('path')
const storage = multer.diskStorage({
    destination: function(req, file, cd){
        cd(null,'public')
    },
    filename:function(res,file,cd){
        cd(null,file.originalname)
    }

})

const fileFilter = (req, file, cd)=>{
    const fileType = /jpg|png|svg|jpeg/
    const result = fileType.test(path.extname(file.originalname))
    if(result){
        cd(null, true)
    }
    else{
        cd("pls upload properly ")
    }
}
const upload = multer({
    storage : storage,
    fileFilter:fileFilter,
    limits:{
        filesize: 1000000
    }
    
}).single('file')
const FileUpload = async (req, res)=>{
    upload(req, res, (err) =>{
        if(err){
            return res.status(500).json(err)
        }
        else{
            return res.status(201).json("Success")
        }

    })

    
}
exports.FileUpload = FileUpload;