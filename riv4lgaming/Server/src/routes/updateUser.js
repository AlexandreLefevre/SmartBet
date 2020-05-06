const UserModel = require('../models/user.model')

function updateUserRoute(app){

app.delete('/profile', async (req, res) => {
    await UserModel.delete({email: req.query.email})
    res.send('user détruit')
})

app.put('/profile', async (req, res) => { 
    const user = await UserModel.findOneAndUpdate({email: req.query.email}, 
        {nom: req.body.nom,
            prenom: req.body.prenom,
            pseudo: req.body.pseudo,
            nationalite: req.body.nationalite,
            ville: req.body.ville,
            dateNaissance: req.body.dateNaissance,
            description: req.body.description,
            $set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true,
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

app.put('/donneesJ', async (req, res) => { 
    const user = await UserModel.findOneAndUpdate({email: req.query.email}, 
        {
            joueurSC2: req.body.joueurSC2,
            divisionSC2: req.body.divisionSC2,
            raceSC2: req.body.raceSC2,
            joueurLOL: req.body.joueurLOL,
            divisionLOL: req.body.divisionLOL,
            roleLOL: req.body.roleLOL,
            joueurVL: req.body.joueurVL,
            divisionVL: req.body.divisionVL,
            joueurCSGO: req.body.joueurCSGO,
            divisionCSGO: req.body.divisionCSGO,
            joueurRL: req.body.joueurRL,
            divisionRL: req.body.divisionRL,
            $set: {  //mots clés mongo
            ...req.query,
        }},{
            new: true,
        })
        res.send({user: user})
        await myUser.save()
    })
}

module.exports = updateUserRoute;