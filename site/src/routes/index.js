const express = require('express')
const router = express.Router()

const {home,categories} = require('../controllers/indexController')
const {login,register, profile} = require ('../controllers/usersController');
const {cart1, cart2, cart3} = require('../controllers/productsController')

router.get('/', home)
router.get('/categories', categories)
router.get('/register', register)
router.get('/login', login)
router.get('/profile', profile);
router.get('/cart1',cart1)
router.get('/cart2',cart2)
router.get('/cart3',cart3)

module.exports = router