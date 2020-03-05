const express = require('express');
const User = require('../core/user');
const router = express.Router();

const user = new User();

// Get the index page
router.get('/', (req, res, next) => {
    res.render('index', {title:"My application"});
})

// Get home page
router.get('/home', (req, res, next) => {
    res.send('This is the home page');
});

// Post login data
router.post('/login', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            res.send('Logged in as : ' + result.username);
        }else {
            // if the login function returns null send this error message back to the user.
            res.send('Username/Password incorrect!');
        }
    })

});

// Post register data
router.post('/register', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            res.send('Welcome ' + userInput.username);
            

        }else {
            console.log('Error creating a new user ...');
        }
    });
});

module.exports = router;