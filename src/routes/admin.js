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

module.exports = router;