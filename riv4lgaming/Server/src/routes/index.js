const bcrypt = require('bcrypt')
const uuid = require('uuid/v1')
const {envoiEmail} = require('../util.js')
const UserModel = require('../models/user.model')


function createRouter(app){
app.get('/', (req, res) => res.send('Hello World!'))

app.delete('/createAccount', async (req, res) => {
    await UserModel.delete({email: req.query.email})
    res.send('user détruit')
})

app.put('/createAccount', async (req, res) => { 
    const user = await UserModel.findOneAndUpdate({email: req.query.email}, 
        {$set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true
        })
        res.send({user: user})
})

app.post('/createAccount', async (req, res) => {
    console.log(req.body);

    const hash = await bcrypt.hash(req.body.password, 10)
    const verif = uuid()
    const myUser = new UserModel({
      email: req.body.email,
      password: hash,
      tokenEmail : verif,
    })
    await myUser.save()
    await envoiEmail(req.body.email, verif)
    res.send('Account created') //requête fini on envoie rien après
  
})
    app.get('/createAccount', async (req, res) => {
        const user = await UserModel.findOne({email: req.query.email})
        console.log('user =>',user);
        res.send({user: user})
  })
  app.put('/checkEmail', async (req, res) => {
      const user = await UserModel.findOne({email: req.query.email, tokenEmail: req.query.token})
      if (user) {//si user existe
          await UserModel.findOneAndUpdate({email: req.query.email},
            {$set: {
              isEmailVerify: true,
          }})
      }
      res.send('ok')
  })
}
module.exports = createRouter;