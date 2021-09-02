const { Brew, Roast } = require('../models')

const getAllRoasts = async (req, res) => {
  try {
    const roasts = await Roast.find()
    return res.status(200).json({ roasts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllBrews = async (req, res) => {
  try {
    const brews = await Brew.find()
    return res.status(200).json({ brews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBrewsByRoastID = async (req, res) => {
  try {
    // const allBrews = await Brew.find()

    // let outputBrews = allBrews.filter((b) => b.roastID === req.params.id)
    let outputBrews = await Brew.find({ roastID: req.params.id })

    return res.status(200).json({ outputBrews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRoasts,
  getAllBrews,
  getBrewsByRoastID
}
