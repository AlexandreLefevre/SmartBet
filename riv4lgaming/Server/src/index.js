const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000
const createRouter = require('./routes')
const bodyParser = require('body-parser')



mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

  mongoose.connection.openUri(`mongodb://localhost:27017/riv4lgamingDB`, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    autoIndex: true,
  })


const db = mongoose.connection

db.on('error', err => {
  console.log('FAILED TO CONNECT', err)
  process.exit(1)
})



app.use((req, res, next) => {
  // autorisation des différentes requêtes et origines
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Request-Method', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-Expiry, X-Client, X-Uuid, Content-Type, Authorization, ')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.once('open', async () => {
  createRouter(app)

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
