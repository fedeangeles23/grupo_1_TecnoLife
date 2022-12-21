const express = require('express');
const router = express.Router();
const {productDetail} = require('../controllers/productsController')

router.get('/detail/:id',productDetail)

module.exports = router;