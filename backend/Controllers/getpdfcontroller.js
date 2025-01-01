const express = require('express')
const app = express();
const path=require('path')
app.use(express.json());    

const GetPdf = async (req, res) => {
    const { filename } = req.params; 
    console.log()
    const filePath = path.join(__dirname, '..', 'public', 'pdfs', filename); 
  
    res.download(filePath, (err) => {
      if (err) {
        console.error(err); 
        res.status(404).send('File not found');
      }
    });
  };

  exports.GetPdf= GetPdf;