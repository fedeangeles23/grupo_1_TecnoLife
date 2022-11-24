const express = require('express')
const router = express.Router()

let {home,categories} = require('../controllers/indexController')

router.get('/', home)
router.get('/categories', categories)

module.exports = router