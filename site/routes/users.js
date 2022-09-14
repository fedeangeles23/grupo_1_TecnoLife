const express = require('express');
const {login,register, processRegister, processLogin} = require ('../controllers/usersController');
const router = express.Router();
const registerValidation = require('../validations/registerValidation');
const loginValidator = require('../validations/loginValidation');


router.get('/register', register);
router.post('/register',registerValidator,processRegister)

router.get('/login', login);
router.post('/login',loginValidator,processLogin)

module.exports = router;