const { check } = require('express-validator')

module.exports = [
 /* Email*/
    check('email').trim().notEmpty().withMessage('Debe ingresar tu email').bail().isEmail().withMessage('Debe ingresaar un email valido'),
    /* Contraseña*/
    check('pass').trim().notEmpty().withMessage('Debe ingresar su contraseña').bail().isLength({min:8}).withMessage('Debe xontener al menos 8 caracteres'),
    ,
]






