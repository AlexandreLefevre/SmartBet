const bcrypt = require('bcrypt')
const uuid = require('uuid/v1')
const {envoiEmail} = require('../util.js')
const UserModel = require('../models/user.model')
var jwt = require('jsonwebtoken')


function createUserRoute(app){
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
    try{
    if (req.body.password !== req.body.passwordVerify){
      res.status(404).send("Le mot de passe ne correspond pas.")
    }
    const hash = await bcrypt.hash(req.body.password, 10)
    const verif = uuid()
    const myUser = new UserModel({
      email: req.body.email,
      password: hash,
      tokenEmail : verif,
      pseudo: req.body.pseudo,
    })
    await myUser.save()
    await envoiEmail(req.body.email, verif)
    res.send('Account created') //requête fini on envoie rien après
  }
  catch(err) {
    res.status(409).send("Le psesudo ou l'email est déjà utilisé.")  
    console.log(err)}
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
  app.get('/loginAccount', async (req, res) => {
    console.log(req.query)
    const user = await UserModel.findOne({email: req.query.email})
    if (!user){
      res.status(404).send("Nous n'avons pas trouvé l'utilisateur.")
    }
    if(user.isEmailVerify){
      res.status(403).send("Vous n'avez pas vérifié votre adresse Email. Vérifiez vos spams si jamais.")
    }
    console.log(user)
    const isVerify = await user.authenticate(req.query.password)
    const token = await user.mapToken()
    if (!isVerify) {
      res.status(404).send("Connexion refusée, vérifiez votre email ou votre mot de passe.")
    }
    console.log(isVerify)
    res.send({user: user, token: token})
  })
  
  app.get('/verifToken', async (req, res) => {
    try {
      const decoded = jwt.verify(req.query.token, 'hfeuazifohz');
      const user = await UserModel.findOne({_id: decoded._id}).select("-password")
      console.log(decoded)
      res.send({
        decoded: user
      })
    } catch(err) {
      console.log("mauvaise signature");
    }
})
}


module.exports = createUserRoute;