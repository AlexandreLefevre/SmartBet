var should = require('chai').should();
var chakram = require('chakram'),
    expect = chakram.expect;

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


/*describe('fail find user function => create()', function () {
  before('Processing', function () {
    apiResponse = chakram.get('http://localhost:4000/loginAccount', {})
    return apiResponse
})
  
  it('should return status 404', function () {
    return expect(apiResponse).to.have.json(function (json) {
      expect(json.message).to.equal("Nous n'avons pas trouvé l'utilisateur.")
      return expect(apiResponse).to.have.status(404)
    })
  })
})*/


describe('Fail create new account => create()', function () {
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

/*describe('Succes create new account => create()', function () {

  before('Processing', function () {
    apiResponse = chakram.post('http://localhost:4000/createAccount', {email:'tongrescyril6@gmail.com', pseudo: 'flokime', password: 'flokikiki'})
    return apiResponse
  })

  it('should return status 200', function () {
    return expect(apiResponse).to.have.json(function (json) {
      expect(json.message).to.equal('Account created')
      console.log("ouioui",apiResponse)
      return expect(apiResponse).to.have.status(200)
    })
  })
})*/