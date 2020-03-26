const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: {
    unique : true,
    type : String,
  },
  password: String,
  pseudo : {
    type : String, 
    unique : true,
  },
  tokenEmail : String,
  isEmailVerify : {
    type : Boolean,
    default : false,
  }
}, {
  timestamps: true,
})

const user = mongoose.model('user', UserSchema)

module.exports = user