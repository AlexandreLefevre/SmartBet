const createUserRoute = require('./user')
const createTournoiRoute = require('./tournoi')


function createRouter(app){
  try{
    createUserRoute(app)
    createTournoiRoute(app)
    //updateUserRoute(app)
  }
  catch(err){
    console.log(err)
  }
  
}

module.exports = createRouter;