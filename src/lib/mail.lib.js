const nodemailer = require('nodemailer');

const transport = async () => {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  };
  
  module.exports = transport