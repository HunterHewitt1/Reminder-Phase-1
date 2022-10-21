const mongoose = require('mongoose')
const closingSchema = require('./closing')
const realtorSchema = require('./realtors')

const Closing = mongoose.model('Closing', closingSchema)
const Realtor = mongoose.model('Realtor', realtorSchema)

module.exports = {
  Closing,
  Realtor
}
