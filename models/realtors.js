const { Schema } = require('mongoose')

const realtorSchema = new Schema(
  {
    name: { type: String, required: true },
    brokerName: { type: String, required: true },
    address: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    realtorId: { type: Schema.Types.ObjectId, ref: 'realtor_id' }
  },
  { timestamps: true }
)

module.exports = realtorSchema
