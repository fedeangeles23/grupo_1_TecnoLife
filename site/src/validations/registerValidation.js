const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [
    /* Nombre*/
    check('name').trim().notEmpty().withMessage('Debe ingresar su nombre').bail().isLength({ min: 3 }).withMessage('Debe contener al menos 3 caracteres'),  
      /* Email*/
      check('email').trim()
      .notEmpty().withMessage('Debe ingresar su email').bail()
      .isEmail().withMessage('Debe ingresar un email valido'),

      body('email').custom((value) => {
        return db.Usuarios.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject('Email ya registrado')
            }
        })
    }),

/* Contraseña*/
    check('pass')
        .notEmpty().withMessage('Debe ingresar una clave').bail()
        
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,20})$/)
        .withMessage('La contraseña debe contener al menos un número, una mayúscula, una minúscula y tener como minimo 8 caracteres'),
        
    check('pass2')
        .notEmpty().withMessage('Debe repetir la clave').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,20})$/)
        .withMessage('La contraseña debe contener al menos un número, una mayúscula, una minúscula y tener como minimo 8 caracteres'),
     

    body('pass2').custom((value,{req}) => value !== req.body.pass ? false : true).withMessage('Las contraseñas no coinciden')

]






