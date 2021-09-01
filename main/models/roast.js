const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Roast = new Schema(
  {
    roastName: { type: String, required: true },
    roaster: { type: String, required: true },
    beanOrigin: { type: String, required: true },
    beanType: { type: String, required: true },
    roastColor: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Roast
