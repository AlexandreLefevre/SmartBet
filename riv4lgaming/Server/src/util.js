const nodemailer = require('nodemailer')
const logingmail = require('./config')

let transporter = nodemailer.createTransport({ //port ?? nodemailer.createTransport(transport[port, defaults])
    service: 'gmail',
    auth: {
      user: logingmail.user,
      pass: logingmail.pass,
    }
  });

async function envoiEmail(email, token,){
    var message = {
      from: logingmail.user,
      to: email,
      subject: "[R4G] Confirmation d'inscription",
      text: "Plaintext version of the message",
      html: `<html>
      <a href='http://127.0.0.1:3000/verifEmail?token=${token}&email=${email}'>Appuyez sur ce lien pour vérifier votre Email</a>
      </html>`,
    };
    const a = await transporter.sendMail(message)
    console.log(a);
  }
  
  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  module.exports = {envoiEmail}