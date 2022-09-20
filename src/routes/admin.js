const {list,create,edit,store,update,destroy,history,restore,crash} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts')
const productValidator = require('../validations/productsValidation')

/* GET home page. */
router.get('/list', list);
router.get('/history', history);

/* Creando un producto */
router.get('/create', create);
router.post('/create',store);
router.post('/create',upload.array('imagenes'),productValidator,store);

/* Editando un producto */
router.get('/edit/:id', edit);
router.put('/edit/:id',upload.array('imagenes'),productValidator, update);

/* Eliminando un producto */
router.delete('/destroy/:id', destroy);
router.delete('/destroy/:id', restore);

module.exports = router;