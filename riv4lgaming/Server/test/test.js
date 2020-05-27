var should = require('chai').should();
var chakram = require('chakram'),
    expect = chakram.expect;
var chai = require("chai");
const UserModel = require('../src/models/user.model')
const TournoiModel = require('../src/models/tournoi.model')
const Index = require ("../src/routes/index.js")
const tournoi = require ("../src/routes/tournoi.js")
const update = require ("../src/routes/updateUser.js")
const user = require ("../src/routes/user.js")
var assert = chai.assert;


/*
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
      apiResponse = chakram.post('http://localhost:4000/createAccount', {email:'tongrescl@gmail.com', pseudo: 'flokime', password: 'flokiki', passwordVerify: 'flokiki'})
      return apiResponse
    })
    /*after( async () => {
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
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongrescyril26@gmail.com', password: 'flokikiki'})
    return apiResponse
  })

  it('should return status ', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Nous n'avons pas trouvé l'utilisateur.")
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
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tong@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki'})
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

describe('Fail login account error mailverify => create()', function () {
  this.timeout(5000)

  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongres@gmail.com', pseudo: 'flokimeski1', password: 'flokikiki'})
    return apiResponse
  })

  it('should return status 403', function () {
    return expect(apiResponse).to.have.json(function (json)
    {
      try{
        console.log(json)
        expect(json).to.equal("Nous n'avons pas trouvé l'utilisateur.")
        return expect(apiResponse).to.have.status(403)
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
        expect(json).to.equal("Nous n'avons pas trouvé l'utilisateur.")
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
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {email:'tongrescyril26@gmail.com', password: 'flo'})
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

//post tournament
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
})*/

describe('array division', function() {
  it('array vide', function(){
    var arr = [];
    assert.equal(arr.length, 0, 'Array length was not 0');
  });
  it('rempli avec des divisions', function(){
    async () => {
      const response = await chai.request(app)
      .post('http://localhost:4000/createTournament')
      .send({
        divsions: ['Argent','Gold','Platine']
      });
      assert.equal(arr.lengt, 3, 'array length is 3')
    }
  });
  // Further code for tests goes here
});

describe('no user', function() {
it('vérification des champs du form enregistrement',
  async () => {
    const response = await chai.request(app)
      .post("http://localhost:4000/register")
      .send({
        pseudo: 'testUnit',
        email: 'test@gmail.com',
        password: 'test123456',
        passwordVerify: 'test123456'
      });
    expect(response.body).to.be.an('object');
    expect(response.body.status).to.equal(200);
    expect(response.body.data).to.have.property('email');
    expect(response.body.data).to.have.property('pseudo');
    expect(response.body.data).to.have.property('password');
    expect(response.body.data).to.have.property('passwordVerify');
  });
});


describe('no user', function() {
  it('connexion user',
    async () => {
      const response = await chai.request(app)
        .get('http://localhost:4000/login')
        .send({
          email: 'test@gmail.com',
          password: 'test123456',
        });
      expect(response.body).to.be.an('object');
      expect(response.body.status).to.equal(200);
      expect(response.body.data).to.have.property('email');
      expect(response.body.data).to.have.property('password');
    });
  });