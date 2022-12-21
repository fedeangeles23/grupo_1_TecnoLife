
const express = require('express')
const router = express.Router()

const {home,categories} = require('../controllers/indexController')
const {carrito} = require('../controllers/productsController')

router.get('/', home)
router.get('/categories', categories)
router.get('/carrito',carrito)

module.exports = router