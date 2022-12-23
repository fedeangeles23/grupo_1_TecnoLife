const express = require('express');
const router = express.Router();
const {detail, search, marcasDestacadas} = require('../controllers/productsController')

router.get('/detail/:id',detail)

router.get('/busqueda', search)

router.get('/marca/:id', marcasDestacadas)

module.exports = router;