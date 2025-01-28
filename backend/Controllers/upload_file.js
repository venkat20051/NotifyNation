const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();
let fsd;
let mail,name;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../public/uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    fsd = `${file.originalname}-${timestamp}`;
    cb(null, fsd);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const uploadFile = (req, res) => {
  try {
    // console.log(req.headers);
    const userData = JSON.parse(req.headers.userdata); // Parse the string back to an object
    // console.log(userData);
    mail = userData.emailId;
    name = userData.username;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!mail) {
      return res.status(400).json({ error: 'Email address is missing' });
    }

    mailing();

    res.status(200).json({
      message: 'File uploaded successfully',
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error('Error during file upload:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailing = () => {
  const pdfPath = path.join(__dirname, '..', 'public', 'uploads', fsd);
  const mailOption = {
    from: process.env.SMTP_MAIL,
    to: mail,
    subject: "Confirmation of Your Exam Application - NOTIFYNATION",
    text: `Dear ${name},

This is to confirm that your exam registration has been successfully processed through NOTIFYNATION. We are pleased to have you onboard.

Please find your exam details and schedule attached to this email for your reference.

Best regards,
The NOTIFYNATION Team
.`,
    attachments: [
      {
        filename: fsd,
        path: pdfPath,
        contentType: 'application/pdf',
      },
    ],
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (info) {
      console.log("Email sent:", info);
    } else {
      console.log("Error sending email:", err);
    }
  });
};

module.exports = {
  uploadMiddleware: upload.single('file'),
  uploadFile,
};
