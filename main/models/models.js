const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Brew = new Schema(
  {
    authorName: { type: String, required: true },
    date: { type: Date, required: true },
    drankAt: { type: String, required: true },
    brewMethod: { type: String, required: true },
    preppedWith: { type: String, required: true },
    aromaNotes: { type: String, required: true },
    flavorNotes: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

const Roast = new Schema(
  {
    roastName: { type: String, required: true },
    roaster: { type: String, required: true },
    beanOrigin: { type: String, required: true },
    beanType: { type: String, required: true },
    roastColor: { type: Number, required: true },
    brewEntries: { type: [Brew], required: true }
  },
  { timestemps: true }
)

module.exports = {
  Brew,
  Roast
}
