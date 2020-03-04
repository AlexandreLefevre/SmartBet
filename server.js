const express = require('express')
const app = express();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) =>{
    res.render('index.ejs', {name : 'kyle'})
})

app.get('/login', (req, res) =>{
    res.render('login.ejs', {name : 'kyle'})
})

app.post('/login', (req, res) =>{
    
} )

app.get('/register', (req, res) =>{
    res.render('register.ejs', {name : 'kyle'})
})

app.post('/register', (req, res) =>{

} )

app.listen(3000)