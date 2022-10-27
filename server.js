const express = require('express')
const cors = require('cors')
const PORT = process.env.port || 3001
const db = require('./db')
const { Closing } = require('./models')
const { Realtor } = require('./models')

const app = express()
//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Closing Routes
//Create Closing Route --> POST
app.post('/closings', async (req, res) => {
  let createClosing = await Closing.create(req.body)
  res.json(createClosing)
})

//Read all closings --> GET
app.get('/closings', async (req, res) => {
  let allClosings = await Closing.find({})
  res.json(allClosings)
})

//Update Closings --> PUT
app.put('/closings', async (req, res) => {
  let updateClosings = await Closing.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )
  res.json(updateClosings)
})

//Delete Realtors
app.delete('/realtors/:id', async (req, res) => {
  let deletedRealtor = await Realtor.findByIdAndDelete(req.params.id)
  res.json(deletedRealtor)
})
//Realtor Routes
// Create Realtor Route --> POST
app.post('/realtors', async (req, res) => {
  let exampleId = '6352fad4125786e90a11aa44'
  const requestBody = { ...req.body, realtorId: exampleId }

  let createRealtor = await Realtor.create(requestBody)
  res.json(createRealtor)
})

//Read All Realtors --> GET
app.get('/realtors', async (req, res) => {
  const allRealtors = await Realtor.find({})
  res.json(allRealtors)
})
//Update Realtors
app.put('/realtors', async (req, res) => {
  let updateRealtor = await Realtor.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateRealtor)
})
//Delete Realtors

//Read all closings by realtors

app.get('/realtor/:id', async (req, res) => {
  const closingByRealtor = await Closing.find({ realtor_id: req.params.id })
  res.json(closingByRealtor)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
