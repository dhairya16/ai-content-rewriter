var express = require('express')
var router = express.Router()

const { transformTextController } = require('../controllers/transform')

router.post('/transform', transformTextController)

module.exports = router
