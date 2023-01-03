const express = require('express')
const router = express.Router()

let {home,categories,prueba,sobreNosotros,preguntasFrecuentes,terminosYcondiciones,trabajaConNosotros,politicaYprivacidad,contacto} = require('../controllers/indexController')

router.get('/', home)

router.get('/categories', categories)
router.get('/prueba', prueba)

/*  Footer vistas  */
router.get('/sobre-nosotros', sobreNosotros) // 
router.get('/preguntas-frecuentes', preguntasFrecuentes) // 
router.get('/terminos-y-condiciones', terminosYcondiciones) // 
router.get('/trabaja-con-nosotros', trabajaConNosotros) // 
router.get('/politica-y-privacidad', politicaYprivacidad) //
router.get('/contacto', contacto) //

module.exports = router