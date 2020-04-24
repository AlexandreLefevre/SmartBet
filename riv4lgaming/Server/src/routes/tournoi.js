const {envoiEmail} = require('../util.js')
const UserModel = require('../models/user.model')
const TournoiModel = require('../models/tournoi.model')

function createTournoiRoute(app){
app.delete('/createTournament', async (req, res) => {
    await TournoiModel.delete({name: req.query.name})
    res.send('tournoi détruit')
})

app.put('/createTournament', async (req, res) => { 
    const tournoi = await TournoiModel.findOneAndUpdate({name: req.query.name}, 
        {$set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true
        })
        res.send({tournoi: tournoi})
})

app.post('/createTournament', async (req, res) => {
    console.log(req.body);
    const myTournoi = new TournoiModel({
      name: req.body.name,
      jeu: req.body.jeu,
      nbr_participants_max: req.body.nbr_participants_max,
      divisions: req.body.divisions,
    })
    await myTournoi.save()
    res.send('Tournoi created') //requête fini on envoie rien après
    //catch(err) {console.log(err)}
});

    app.get('/createTournament', async (req, res) => {
        const tournoi = await TournoiModel.findOne({name: req.query.name})
        console.log('tournoi =>',tournoi);
        res.send({tournoi: tournoi})
  })
  /*app.get('/loginAccount', async (req, res) => {
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
      res.status(404).send("Login failed.")
    }
    console.log(isVerify)
    res.send({user: user, token: token})
  })
  
  app.get('/verifToken', async (req, res) => {
    try {
      const decoded = jwt.verify(req.query.token, 'hfeuazifohz');
      console.log(decoded)
      res.send({
        decoded: decoded
      })
    } catch(err) {
      console.log("mauvaise signature");
    }
})*/

}

module.exports = createTournoiRoute;