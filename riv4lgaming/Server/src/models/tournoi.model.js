const mongoose = require('mongoose')

const TournoiSchema = new mongoose.Schema({
    name : {
    type : String, 
    unique : true,
  },
  auteur: {
    type: mongoose.Schema.ObjectId, ref: 'user'
  },
  participants : [{type: mongoose.Schema.ObjectId, ref: 'user'}],
  }, 
  {
  timestamps: true,
})

const tournoi = mongoose.model('tournoi', TournoiSchema)

module.exports = tournoi