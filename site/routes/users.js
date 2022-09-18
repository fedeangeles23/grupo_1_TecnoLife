const express = require('express');
const router = express.Router();
const {login,register, processRegister, processLogin} = require ('../controllers/usersController');


const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');


router.get('/register', register);
router.post('/register',registerValidator,processRegister)
/* router.get('/login', login); */
router.get('/login', login);
router.post('/login',loginValidator,processLogin)

module.exports = router;