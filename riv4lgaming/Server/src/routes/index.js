const createUserRoute = require('./user')
const createTournoiRoute = require('./tournoi')


function createRouter(app){
  try{
    createUserRoute(app)
    createTournoiRoute(app)
  }
  catch(err){
    console.log(err)
  }
  
}

module.exports = createRouter;