const express = require('express');
const router = express.Router();
const {detail, search} = require('../controllers/productsController')

router.get('/detail/:id',detail)

router.get('/busqueda', search)

module.exports = router;