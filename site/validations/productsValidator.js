const { check } = require('express-validator')

module.exports = [
    /* Marca*/
    check('Marca').trim().notEmpty().withMessage('Este campo es obligatorio'),
    /*Titulo */
    check('Titulo').trim().notEmpty().withMessage('Este campo es obligatorio'),
    /*Categoria */
    check('Categoria').trim().notEmpty().withMessage('Debe seleccionar una categoria'),
    /*Precio */
    check('Precio').trim().notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('Solo se aceptan numeros'),
    /* Descuento*/
    check('Descuento').trim().isInt().withMessage('Solo se aceptan numeros'),
    /* Stock*/
    check('Stock').trim().notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('Solo se aceptan numeros'),
    /* Descripcion*/
    check('Descripcion').trim().notEmpty().withMessage('Este campo es obligatorio'),
    /* imagenes*/
    check('imagenes'),

]






