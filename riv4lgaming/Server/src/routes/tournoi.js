const UserModel = require('../models/user.model')
const TournoiModel = require('../models/tournoi.model')

function createTournoiRoute(app){
/**
* @api {delete} /tournoi/:id Request User information
* @apiName GetTournoi
* @apiGroup Tournoi
*
*/
app.delete('/createTournament', async (req, res) => {
    await TournoiModel.delete({name: req.query.name})
    res.send('tournoi détruit')
})
/**
 * @api {put} /tournoi/:id Request User information
 * @apiName GetTournoi
 * @apiGroup Tournoi
 *
 */
app.put('/createTournament', async (req, res) => { 
    const tournoi = await TournoiModel.findOneAndUpdate({name: req.query.name}, 
        {$set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true
        })
        res.send({tournoi: tournoi})
})
/**
 * @api {post} /tournoi/:id Request User information
 * @apiName GetTournoi
 * @apiGroup Tournoi
 *
 * @apiParam {Number} id Tournoi unique ID.
 * 
 * @apiError failCreate Le nom de ce tournoi est déjà utilisé. 
 * 
 * @apiSuccess {String} name Name du tournoi.
 * @apiSuccess {String} jeu Jeu du tournoi.
 * @apiSuccess {Number} participants Nombre de participants max au tournoi.
 * @apiSuccess {String} divisions DIvisions pouvant participer au tournoi.
 * @apiSuccess {String} description Description du tournoi. 
 * 
 * @apiSuccessExample
 * {
 *      name: "Starcraft 2 tournament 1"
 *      jeu: "Starcraft 2"
 *      nbr_participants_max: "64"
 *      divisions: "Bronez, Argent, Or, Platine"
 *      description: "Ceci est un test."
 * }
 *  */
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
/**
 * @api {get} /tournoi/:id Request User information
 * @apiName GetTournoi
 * @apiGroup Tournoi
 *
 */
    app.get('/createTournament', async (req, res) => {
        const tournoi = await TournoiModel.findOne({name: req.query.name})
        console.log('tournoi =>',tournoi);
        res.send({tournoi: tournoi})
  })
}

module.exports = createTournoiRoute;