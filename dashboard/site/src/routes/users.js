const express = require('express');
const router = express.Router();
const {login,register,perfil,logout, processRegister, processLogin ,updatePerfil} = require ('../controllers/usersController');


const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload = require ('../middlewares/multerUsuarios');

router.get('/register', registerValidation,register);
router.post('/register',registerValidation, upload.single('Image'), registerValidation, processRegister)

router.get('/login', login);
router.post('/login',loginValidation, processLogin)

router.get('/perfil', perfil);
router.delete('/logout', logout); 

router.put('/perfil/:id',upload.single('imagen'),updatePerfil)
/*router.put('/profile/:id',upload.single('image'), usersController.updateProfile);
 */
module.exports = router;