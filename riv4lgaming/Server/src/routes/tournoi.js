const UserModel = require('../models/user.model')
const TournoiModel = require('../models/tournoi.model')

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
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
    try{
    const myTournoi = new TournoiModel({
      name: req.body.name,
      jeu: req.body.jeu,
      nbr_participants_max: req.body.nbr_participants_max,
      divisions: req.body.divisions,
      description: req.body.description,
    })
    await myTournoi.save()
    res.send('Tournoi created') 
}
    catch(err) {
        res.status(409).send("Ce nom de tournoi est déjà utilisé.")  
        console.log(err)}
    });

    app.get('/createTournament', async (req, res) => {
        const tournoi = await TournoiModel.findOne({name: req.query.name})
        console.log('tournoi =>',tournoi);
        res.send({tournoi: tournoi})
  })
}

module.exports = createTournoiRoute;