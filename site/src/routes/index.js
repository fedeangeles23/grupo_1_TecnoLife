const express = require('express')
const router = express.Router()

let {home,categories, home2, prueba} = require('../controllers/indexController')

//router.get('/', home)
router.get('/', home2)

router.get('/categories', categories)
router.get('/prueba', prueba)

module.exports = router