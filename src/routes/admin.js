<<<<<<< HEAD
const {list,create,edit,store,update,destroy,history} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', list);
router.get('/history', history);

/* Creando un producto */
router.get('/create', create);
router.post('/create',store);

/* Editando un producto */
router.get('/edit/:id', edit);
router.put('/edit/:id', update);

/* Eliminando un producto */
router.delete('/destroy/:id', destroy);
=======
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts')
let {create, edit, list, update, trash, store} = require('../controllers/adminController');

router.get('/list', list);
router.get('/create', create);
router.get('/edit/:id', edit);

router.post('/create',store);

router.put('/edit/:id',upload.single('Image'), update)

router.delete('/:id', trash);
>>>>>>> 6cfeb4df41915a17dfd40ce693c8b50147f4da2c

module.exports = router;