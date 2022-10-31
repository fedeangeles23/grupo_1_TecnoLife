const express = require('express');
const {login,register, processRegister, processLogin} = require ('../controllers/usersController');
const router = express.Router();


const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload = require ('../middlewares/multerUsuarios')

router.get('/register', registerValidation,register);
router.post('/register',registerValidation, upload.single('Image'), registerValidation, processRegister)
/* router.get('/login', login); */
router.get('/login', login);
router.post('/login',loginValidation, processLogin)

/* router.get('/perfil', perfil);
router.delete('/logout', logout); */

module.exports = router;