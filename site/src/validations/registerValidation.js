const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [
    /* Nombre*/
    check('name').trim().notEmpty().withMessage('Debe ingresar su nombre').bail().isLength({ min: 3 }).withMessage('Debe contener al menos 3 caracteres'),  
      /* Email*/
      check('email').trim()
      .notEmpty().withMessage('Debe ingresar su email').bail()
      .isEmail().withMessage('Debe ingresar un email valido'),
      
/* Contraseña*/
    check('pass')
        .notEmpty().withMessage('Debe ingresar una clave').bail()
        .isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres'),
    check('pass2')
        .notEmpty().withMessage('Debe repetir la clave').bail()
        .isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres').bail(),

    body('pass2').custom((value,{req}) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden')

]






