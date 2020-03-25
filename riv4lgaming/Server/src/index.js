const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const UserModel = require('./user.model')
const express = require('express')
const app = express()
const port = 4000
const nodemailer = require('nodemailer')
const logingmail = require('./config')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

  mongoose.connection.openUri(`mongodb://localhost:27017/riv4lgamingDB`, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    autoIndex: true,
  })


const db = mongoose.connection

db.on('error', err => {
  console.log('FAILED TO CONNECT', err)
  process.exit(1)
})



app.use((req, res, next) => {

  // autorisation des différentes requêtes et origines
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Request-Method', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-Expiry, X-Client, X-Uuid, Content-Type, Authorization, ')

  next()
})

db.once('open', async () => {

  app.get('/', (req, res) => res.send('Hello World!'))

  app.get('/createAccount', async (req, res) => {
    console.log(req.query);

    const hash = await bcrypt.hash(req.query.password, 10)
    const myUser = new UserModel({
      email: req.query.email,
      password: hash,
    })

    await myUser.save()
    res.send('Account created')
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})

let transporter = nodemailer.createTransport({ //port ?? nodemailer.createTransport(transport[port, defaults])
  service: 'gmail',
  auth: {
    user: logingmail.user,
    pass: logingmail.pass,
  }
});

var message = {
    from: "riv4lgaming.be@gmail.com",
    to: "tongrescyril26@gmail.com",
    subject: "[R4G] Confirmation d'inscription",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };

transporter.sendMail(message, function(a, b){
  console.log(a);
  console.log(b);
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


/*
transporter.sendMail(data[port, callback]) //port ??
var message = {
  from: "riv4lgaming.be@gmail.com",
  to: "receiver@sender.com",
  subject: "[R4G] Confirmation d'inscription",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>"
};*/

//nodemailer
/*
pp.post('/send', function(req, res, next) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test-email@gmail.com',
      pass: 'test123'
    }
  })
}
  const mailOptions = {
    from: `${req.body.email}`,
    to: 'test-email@gmail.com',
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  })
})
*/
//
// /*CREATE USER */
// const myUser = new UserModel({
//   email: 'toto@live.com',
//   password: 'totoPassword',
// })
// await myUser.save()
// /*CREATE USER */
//
//
// /* FIND USER */
// const user = await UserModel.findOne({email: 'toto@live.com'})
// console.log('user =>',user);
//
//
// /*UPDATE USER*/
// await UserModel.findOneAndUpdate({email: 'toto@live.com'}, {password: '1234'})
//
//
// const newUser = await UserModel.findOne({email: 'toto@live.com'})
// console.log('user =>',newUser);