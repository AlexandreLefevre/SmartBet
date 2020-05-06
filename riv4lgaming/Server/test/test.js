var should = require('chai').should();
var chakram = require('chakram'),
    expect = chakram.expect;
const UserModel = require('../src/models/user.model')

/*var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});*/

/*describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function(done) {
        var user = new User('Luna');
        user.save(function(err) {
          if (err) done(err);
          else done();
        });
      });
    });
  });

beforeEach(async function() {
  await db.clear();
  await db.save([tobi, loki, jane]);
});
  
describe('#find()', function() {
  it('responds with matching records', async function() {
    const users = await db.find({type: 'User'});
    users.should.have.length(4);
  });
});*/

// post create account
describe("start of test", function (){

  describe('Fail create new account mdp => create()', function () {
    this.timeout(5000)

    before('Processing', function () {
      apiResponse = chakram.post('http://localhost:4000/createAccount', {email:'tongrescyril26@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki', passwordVerify: 'flokiiki'})
      return apiResponse
    })

    it('should return status 404', function () {
      return expect(apiResponse).to.have.json(function (json)
      {
        try{
          console.log(json)
          expect(json).to.equal("Le mot de passe ne correspond pas.")
          return expect(apiResponse).to.have.status(404)
        }
        catch(err){
          console.log(err)
        }
      })
    })
  })

  describe('Succes create new account => create()', function () {
    this.timeout(5000)

    before('Processing', function () {
      apiResponse = chakram.post('http://localhost:4000/createAccount', {email:'tongrescyril@gmail.com', pseudo: 'flokime', password: 'flokiki', passwordVerify: 'flokiki'})
      return apiResponse
    })
    after( async () => {
      console.log("destroyer")
      try {
        await UserModel.remove({email: "tongrescyril@gmail.com"})
        console.log("desr")
      }
      catch (err) {
        console.log(err)
      }
    })

    it('should return status 200', function () {
      return expect(apiResponse).to.have.json(function (json) {
        try{
          console.log(json)
          expect(json).to.equal("Account created")
          return expect(apiResponse).to.have.status(200)
        }
        catch(err){
          console.log(err)
        }
      })
    })
  })

  describe('Fail create new account existed=> create()', function () {
    this.timeout(5000)

    before('Processing', function () {
      apiResponse = chakram.post('http://localhost:4000/createAccount', {email:'tongrescyril26@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki', passwordVerify: 'flokikiki'})
      return apiResponse
    })

    it('should return status 409', function () {
      return expect(apiResponse).to.have.json(function (json)
      {
        try{
          console.log(json)
          expect(json).to.equal("Le psesudo ou l'email est déjà utilisé.")
          return expect(apiResponse).to.have.status(409)
        }
        catch(err){
          console.log(err)
        }
      })
    })
  })
})

//get login 
describe('login ok => login()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongrescyril26@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki'})
    return apiResponse
  })

  it('should return status ', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("")
        return expect(apiResponse).to.have.status()
      }
      catch(err){
        console.log(err)
      }
    })
  })
})

describe('Fail login account error mail => create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongres@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki'})
    return apiResponse
  })

  it('should return status 404', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Nous n'avons pas trouvé l'utilisateur.")
        return expect(apiResponse).to.have.status(404)
      }
      catch(err){
        console.log(err)
      }
    })
  })
})

describe('Fail login account error mail not verify => create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongrescyril26@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki', isEmailVerify: false})
    return apiResponse
  })

  it('should return status 403', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Vous n'avez pas vérifié votre adresse Email. Vérifiez vos spams si jamais.")
        return expect(apiResponse).to.have.status(403)
      }
      catch(err){
        console.log(err)
      }
    })
  })
})

describe('Fail login account error mdp => create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongrescyril26@gmail.com', pseudo: 'flokimeski1', password: 'flo'})
    return apiResponse
  })

  it('should return status 404', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Connexion refusée, vérifiez votre email ou votre mot de passe.")
        return expect(apiResponse).to.have.status(404)
      }
      catch(err){
        console.log(err)
      }
    })
  })
})

//port tournament
describe('Succes create new tournament => create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.post('http://localhost:4000/createTournament', {name:'starcrat'})
    return apiResponse
  })

  it('should return status 200', function () {
    return expect(apiResponse).to.have.json(function (json) {
      try{
        console.log(json)
        expect(json).to.equal("Tournoi created")
        return expect(apiResponse).to.have.status(200)
      }
      catch(err){
        console.log(err)
      }
    })
  })
})

describe('Fail create new tournament existed=> create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.post('http://localhost:4000/creatTournament', {name: "ok"})
    return apiResponse
  })

  it('should return status 409', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Ce nom de tournoi est déjà utilisé.")
        return expect(apiResponse).to.have.status(409)
      }
      catch(err){
        console.log(err)
      }
    })
  })
})
