const bcrypt = require('bcrypt')
const uuid = require('uuid/v1')
const {envoiEmail} = require('../util.js')
const UserModel = require('../models/user.model')
var jwt = require('jsonwebtoken')

function createUserRoute(app){
app.get('/', (req, res) => res.send('Hello World!'))
/**
 * @api {delete} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 */
app.delete('/createAccount', async (req, res) => {
    await UserModel.delete({email: req.query.email})
    res.send('user détruit')
})
/**
 * @api {put} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 */
app.put('/createAccount', async (req, res) => { 
    const user = await UserModel.findOneAndUpdate({email: req.query.email}, 
        {$set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true
        })
        res.send({user: user})
})
  /**
 * @api {post} /user/:id Posting user information.
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiError mdpFail Les mots de passe ne correspondent pas.  
 * @apiError createFail L'email ou le pseudo est déjà utilisé. 
 *
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {String} pseudo Pseudo of the User.
 * 
 * @apiSuccesExample 
 * {
 *    email: "blabla@gmail.com"
 *    password: "blablaenter"
 *    passwordVerify: "blablaenter"
 *    pseudo: "test1" 
 * }
 */
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
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 */
    app.get('/createAccount', async (req, res) => {
        const user = await UserModel.findOne({email: req.query.email})
        console.log('user =>',user);
        res.send({user: user})
  })

   /**
 * @api {put} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * 
 *
 * @apiSuccess {String} email Email of the User.
 * 
 * @apiSuccesExample 
 * {
 *    email: "blabla@gmail.com"
 *    password : "blablaenter"
 * }
 */
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
  /**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiError noUtilisateur L'utilisateur n'existe pas. Aucun utilisateur ne correspond à l'adresse email entrée. 
 * @apiError verifEmail L'email utilisé n'est pas vérifié. L'utilisateur existe mais son adresse email n'est pas vérifiée. 
 * @apiError failConnect L'email ou le mdp n'est pas bon. Le mot de passe ne correspond pas à l'adresse email. 
 *
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * 
 * @apiSuccessExample 
 * {
 *    email: "blabla@gmail.com"
 *    password : "blablaenter"
 * }
 */
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
  
  /**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 */
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