const {check} = require('express-validator')

module.exports = [
    /* Titulo */
    check('Titulo').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail()
    .isLength({min:5}).withMessage('Debe contener al menos 5 caracteres'),

    /* Marca */
    check('marca').trim()
    .notEmpty().withMessage('Este campo es obligatorio'),

    /* Precio */
    check('Precio').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail()
    .isInt().withMessage('Solo se aceptan numeros'),

    /* Descuento */
    check('Descuento').trim()
    .isInt().withMessage('Solo se aceptan numeros'),

    /* Stock */
    check('Stock').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail()
    .isInt().withMessage('Solo se aceptan numeros'),

    /* Categoria */
    check('Categoria').trim()
    .notEmpty().withMessage('Debe seleccionar una categoria'),

    /* Descripcion */
    check('Descripcion').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail()
    .isLength({min:10}).withMessage('Debe contener al menos 10 caracteres'),
]