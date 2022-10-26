const { Schema } = require('mongoose')

const closingSchema = new Schema(
  {
    realtorName: { type: String, required: true },
    clientName: { type: String, required: true },
    email: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    MLS: { type: String, required: true },
    closeDate: { type: Date, required: true },
    exucutedContractDate: { type: Date, required: true },
    optionPeriod: { type: String, required: true },
    miscFee: { type: String, required: false },
    titlePolicyDelivery: { type: String, required: false },
    thirdPartyFinacing: { type: String, required: false },
    surveryDelivery: { type: Boolean, required: false },
    realtor_id: { type: Schema.Types.ObjectId, ref: 'realtor_id' }
  },
  { timestamps: true }
)
//add ID for realtorName to ref name in realtors.js
//dropdown to display realtors(with id) to accosiate the closing with realtor(if statement)
module.exports = closingSchema
