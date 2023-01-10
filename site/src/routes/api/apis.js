const express = require('express');
const router = express.Router();

const {usuarios, usuarioPorId, productos, productosPorId, crearProducto, editarProducto, eliminarProducto, catymarca} = require('../../controllers/api/apiController')

// rutas
router.get('/users', usuarios);
router.get('/users/:id', usuarioPorId);

/* productos */
router.get('/productos', productos );
router.get('/marcat', catymarca );
router.get('/producto/:id', productosPorId);
router.post('/crear', crearProducto);
router.put('/editar/:id', editarProducto);
router.delete('/eliminar/:id', eliminarProducto);


module.exports = router;