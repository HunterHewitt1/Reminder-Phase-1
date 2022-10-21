const express = require('express')
const PORT = process.env.port || 3001
const db = require('./db')
const { Closing } = require('./models')
const { Realtor } = require('./models')

const app = express()

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
