const { Schema } = require('mongoose')

const realtorSchema = new Schema(
  {
    name: { type: String, required: true },
    brokerName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = realtorSchema
