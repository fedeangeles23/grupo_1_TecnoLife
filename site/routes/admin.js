const {list,create,edit,store,update,destroy,history,restore} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')
const productsValidator= require('../validations/productsValidator')


const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/img/products')
    },
    filename:(req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

/* GET home page. */
router.get('/list', list);
router.get('/history', history);

/* Creando un producto */
router.get('/create', create);
router.post('/create',upload.array('imagenes'), productsValidator, store);

/* Editando un producto */
router.get('/edit/:id', edit);
router.put('/edit/:id', upload.array('imagenes'), productsValidator, update);

/* Eliminando un producto */
router.delete('/destroy/:id', destroy);
router.delete('/restore/:id', restore);

module.exports = router;