const express = require('express');
const router = express.Router();
const {detail, cart,list,categoria} = require('../controllers/productsController')

router.get('/detail/:id',detail)
//router.get('/cart1',cart1)
////router.get('/cart2',cart2)
//router.get('/cart3',cart3)

module.exports = router;