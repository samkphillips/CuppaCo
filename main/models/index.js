const mongoose = require('mongoose')
const RoastSchema = require('./roast')
const BrewSchema = require('./brew')

const Brew = mongoose.model('brews', BrewSchema)
const Roast = mongoose.model('roasts', RoastSchema)

module.exports = {
  Brew,
  Roast
}
