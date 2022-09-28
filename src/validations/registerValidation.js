const { check, body } = require('express-validator')

module.exports = [
    /* Nombre*/
    check('nombre').trim().notEmpty().withMessage('Debe ingresar nombre y apellido'),
    /* Email*/
    check('email').trim().notEmpty().withMessage('Debe ingresar tu email').bail().isEmail().withMessage('Debe ingresaar un email valido'),
    /* Contraseña*/
    check('contrasenia').isLength({min:5}).withMessage('Debe contener al menos 5  caracteres'),
    check('contrasenia2').isLength({min:5}).withMessage('Debe contener al menos 5 caracteres').bail(),

    body('contrasenia2').custom((value,{req}) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden')

]

