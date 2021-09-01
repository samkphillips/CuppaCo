const mongoose = require('mongoose')
const { BrewSchema, RoastSchema } = require('./models')

const Brew = mongoose.model('brews', BrewSchema)
const Roast = mongoose.model('roasts', RoastSchema)

module.exports = {
  Brew,
  Roast
}
