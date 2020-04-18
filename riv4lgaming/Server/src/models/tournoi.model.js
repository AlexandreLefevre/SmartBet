const mongoose = require('mongoose')

const TournoiSchema = new mongoose.Schema({
    nameTournament : {
    type : String, 
    unique : true,
  },
  participants : Array,
  }, 
  {
  timestamps: true,
})

const tournoi = mongoose.model('tournoi', TournoiSchema)

module.exports = tournoi