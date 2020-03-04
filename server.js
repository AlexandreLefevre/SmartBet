if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(passport, email => users.find(user => user.email === email)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended : false}))
app.use(flash())
app.use(session({
    secret: process-event.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) =>{
    res.render('index.ejs', {name : 'kyle'})
})

app.get('/login', (req, res) =>{
    res.render('login.ejs', {name : 'kyle'})
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', (req, res) =>{
    res.render('register.ejs', {name : 'kyle'})
})

app.post('/register', (req, res) =>{
    try {

        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/login')
    } catch (error) {
        res.redirect('/login')
    } 
} )

app.listen(3000)