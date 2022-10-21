const express = require('express')
const PORT = process.env.port || 3001
const db = require('./db')
const { Closing } = require('./models')
const { Realtor } = require('./models')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Closing Routes

//Create Closing Route --> POST
app.post('/closings', async (req, res) => {
  let createClosing = await Closing.create(req.body)
  res.send(createClosing)
})

//display all closings --> GET

//Realtor Routes

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
