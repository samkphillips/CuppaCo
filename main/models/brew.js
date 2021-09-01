const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Brew = new Schema(
  {
    author_name: { type: String, required: true },
    date: { type: Date, required: true },
    drank_at: { type: String, required: true },
    brew_method: { type: String, required: true },
    prepped_with: { type: String, required: true },
    aroma_notes: { type: String, required: true },
    flavor_notes: { type: String, required: true },
    rating: { type: Number, required: true },
    roast_id: { type: Schema.Types.ObjectId, ref: 'roast_id' }
  },
  { timestamps: true }
)

module.exports = Brew
