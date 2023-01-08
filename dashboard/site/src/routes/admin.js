const {list,create,edit,store,update,destroy} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProductos')
const productValidator = require('../validations/productsValidation')

/* GET home page. */
router.get('/list', list);
/* router.get('/history', history); */

/* Creando un producto */
router.get('/create', create);
/* router.post('/create',store); */
router.post('/create',upload.array('imagen'),productValidator,store);

/* Editando un producto */
router.get('/edit/:id', edit);
router.put('/edit/:id',upload.fields([
    {name:'imagen1',maxCount: 1},
    {name:'imagen2',maxCount: 1},
    {name:'imagen3',maxCount: 1},
    {name:'imagen4',maxCount: 1}
]),/* productValidator, */ update);

/* Eliminando un producto */
router.delete('/destroy/:id', destroy);
/* router.delete('/destroy/:id', restore); */

module.exports = router;