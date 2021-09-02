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
    rating: { type: Number, required: true },
    roastID: { type: Schema.Types.ObjectId, ref: 'roastID' }
  },
  { timestamps: true }
)

module.exports = Brew
