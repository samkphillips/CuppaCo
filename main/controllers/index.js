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
    let outputBrews = await Brew.find({ roastID: req.params.id })

    return res.status(200).json({ outputBrews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addRoast = async (req, res) => {
  try {
    const roast = await new Roast(req.body)
    await roast.save()
    return res.status(201).json({ roast })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addBrew = async (req, res) => {
  try {
    const brew = await new Brew(req.body)
    await brew.save()
    return res.status(201).json({ brew })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRoast = async (req, res) => {
  try {
    await Brew.deleteMany({ roastID: req.params.id })
    const deleted = await Roast.deleteOne({ _id: req.params.id })
    if (deleted) {
      return res.status(200).send('Roast deleted')
    }
    throw new Error('Roast not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBrew = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Brew.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Brew deleted')
    }
    throw new Error('Brew not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRoasts,
  getAllBrews,
  getBrewsByRoastID,
  addRoast,
  addBrew,
  deleteRoast,
  deleteBrew
}
