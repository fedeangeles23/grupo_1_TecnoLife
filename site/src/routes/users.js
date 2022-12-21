const express = require('express')
const router = express.Router()

const {login,register, profile} = require ('../controllers/usersController');

router.get('/register', register)
router.get('/login', login)
router.get('/profile', profile);

module.exports = router