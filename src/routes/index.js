const express = require('express')
const router = express.Router()

let {home,categories,cart1,cart2,login,productDetail,register, perfil} = require('../controllers/indexController')

router.get('/', home)
router.get('/categories', categories)
router.get('/cart1', cart1)
router.get('/cart2', cart2)
router.get('/login', login)
router.get('/productDetail', productDetail)
router.get('/register', register)
router.get('perfil', perfil)

module.exports = router