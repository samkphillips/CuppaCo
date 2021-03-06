const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/roasts', controllers.getAllRoasts)

router.get('/brews', controllers.getAllBrews)

router.get('/roasts/:id', controllers.getRoastByID)

router.get('/brews/:id', controllers.getBrewsByRoastID)

router.post('/roasts', controllers.addRoast)

router.post('/brews', controllers.addBrew)

router.delete('/roasts/:id', controllers.deleteRoast)

router.delete('/brews/:id', controllers.deleteBrew)

module.exports = router
