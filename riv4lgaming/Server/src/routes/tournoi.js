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
      try{
        const myTournoi = new TournoiModel({
          name: req.body.name,
          jeu: req.body.jeu,
          nbr_participants_max: req.body.nbr_participants_max,
          divisions: req.body.divisions,
          description: req.body.description,
          image: req.body.image,
        })
        await myTournoi.save()
        res.send('Tournoi created')
      }
      catch(err) {
        res.status(409).send("Ce nom de tournoi est déjà utilisé.")
        console.log(err)}
      });

      app.get('/createTournament', async (req, res) => {
        const tournoi = await TournoiModel.findOne({name: req.query.name}).populate({path: 'participants', selecte: '-password'}).lean()
        console.log(tournoi);
        res.send({tournoi: tournoi})
      })


      app.get('/getAllTournaments', async (req, res) => {
        const tournaments = await TournoiModel.find().populate({path: 'participants', selecte: '-password'}).limit(100).lean()
        console.log(tournaments);
        res.send({tournaments: tournaments})
      })

      app.get('/getTournament', async (req, res) => {
        try {
        const tournament = await TournoiModel.findById(req.query.tournoi).populate({ path: 'participants', selecte: '-password' }).lean()
        console.log(tournament);
        res.send({tournament: tournament})

      } catch (err) {
        console.log(err);
      }

      })

      app.put('/joinTournament', async (req, res) => {
        try {

        const params = req.query
        const tournaments = await TournoiModel.findOneAndUpdate({_id: params.tournoi }, {$addToSet: { participants: params.user }}, {new: true}).populate({path: 'participants', selecte: '-password'}).lean()
        res.send({ tournaments: tournaments})

      } catch (e) {
        console.log(e);
      }
      })

      app.put('/leaveTournament', async (req, res) => {
      try {

      const params = req.query
      const tournaments = await TournoiModel.findOneAndUpdate({_id: params.tournoi }, { $pull: { participants: params.user }}, {new: true}).populate({path: 'participants', selecte: '-password'}).lean()
      res.send({ tournaments: tournaments})

    } catch (e) {
      console.log(e);
    }
  })

}

      module.exports = createTournoiRoute;
