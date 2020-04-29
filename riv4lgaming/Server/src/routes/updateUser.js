const bcrypt = require('bcrypt')
const uuid = require('uuid/v1')
const UserModel = require('../models/user.model')
var jwt = require('jsonwebtoken')


function updateUserRoute(app){

app.delete('/profile', async (req, res) => {
    await UserModel.delete({email: req.query.email})
    res.send('user détruit')
})

app.put('/profile', async (req, res) => { 
    const user = await UserModel.findOneAndUpdate({email: req.query.email}, 
        {$set: {  //mots clés mongo
            ...req.query,
        }},{
            nom: req.body.nom,
            prenom: req.body.prenom,
            pseudo: req.body.pseudo,
            nationalite: req.body.nationalite,
            ville: req.body.ville,
            telephone: req.body.telephone,
            dateNaissance: req.body.dateNaissance,
            description: req.body.description,
        })
        res.send({user: user})
        await myUser.save()
})

app.post('/profile', async (req, res) => {
    console.log(req.body);
    await myUser.save()
    res.send('Account updated') //requête fini on envoie rien après
})
    app.get('/profile', async (req, res) => {
        const user = await UserModel.findOne({email: req.query.email})
        console.log('user =>',user);
        res.send({user: user})
  })
}


module.exports = updateUserRoute;