const {list,create,edit,store,update,destroy,history,restore,crash} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts')


/* GET home page. */
router.get('/list', list);
router.get('/history', history);

/* Creando un producto */
router.get('/create', create);
router.post('/create',upload.array('imagenes'),store);

/* Editando un producto */
router.get('/edit/:id', edit);
router.put('/edit/:id', upload.array('imagenes'), update);

/* Eliminando un producto */
router.delete('/destroy/:id', destroy);
router.delete('/restore/:id', restore);
router.delete('/crash/:id', crash);

module.exports = router;