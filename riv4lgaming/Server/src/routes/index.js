const createUserRoute = require('./user')
const createTournoiRoute = require('./tournoi')
const updateUserRoute = require('./updateUser')


function createRouter(app){
  try{
    createUserRoute(app)
    createTournoiRoute(app)
    updateUserRoute(app)
  }
  catch(err){
    console.log(err)
  }
  
}

module.exports = createRouter;