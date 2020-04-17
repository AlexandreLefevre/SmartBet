const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
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

UserSchema.methods.authenticate = async function (password) {
      const value = await bcrypt.compare(password, this.password)
      return value
}

UserSchema.methods.mapToken = async function () {
  const value = {
    _id : this._id, 
    email: this.email,
    pseudo: this.pseudo,
  }
  const token = jwt.sign(value, 'hfeuazifohz');
  return token
}

const user = mongoose.model('user', UserSchema)

module.exports = user