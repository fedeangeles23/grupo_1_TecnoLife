const express = require('express');
const router = express.Router();
const {productDetail, cart1, cart2, cart3} = require('../controllers/productsController')

router.get('/detail/:id',productDetail)
router.get('/cart1',cart1)
router.get('/cart2',cart2)
router.get('/cart3',cart3)

module.exports = router;