const { check, body } = require('express-validator')

module.exports = [
    /* Nombre*/
    check('name').trim().notEmpty().withMessage('Debe ingresar nombre y apellido'),
    /* Email*/
    check('email').trim().notEmpty().withMessage('Debe ingresar tu email').bail().isEmail().withMessage('Debe ingresaar un email valido'),
    /* Contraseña*/
    check('pass').isLength({min:5}).withMessage('Debe contener al menos 5  caracteres'),
    check('pass2').isLength({min:5}).withMessage('Debe contener al menos 5 caracteres').bail(),

    body('pass2').custom((value,{req}) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden')

]

