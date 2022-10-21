const { Schema } = require('mongoose')

const closingSchema = new Schema(
  {
    realtorName: { type: String, required: true },
    clietName: { type: String, required: true },
    email: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    MLS: { type: String, required: true },
    closeDate: { type: Date, required: true },
    exucutedContractDate: { type: Date, required: true },
    optionPeriod: { type: String, required: true },
    miscFee: { type: String, required: true },
    titlePolicyDelivery: { type: String, required: true },
    thirdPartyFinacing: { type: String, required: true },
    surveryDelivery: { type: Boolean, required: true },
    closing_id: { type: Schema.Types.ObjectId, ref: 'closing_id' }
  },
  { timestamps: true }
)
//add ID for realtorName to ref name in realtors.js
//dropdown to display realtors(with id) to accosiate the closing with realtor(if statement)
module.exports = closingSchema
