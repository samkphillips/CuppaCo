const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/roasts', controllers.getAllRoasts)

router.get('/brews', controllers.getAllBrews)

router.get('/brews/:id', controllers.getBrewsByRoastID)

module.exports = router
