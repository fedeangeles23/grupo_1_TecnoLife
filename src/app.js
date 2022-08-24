const express = require('express')
const path = require('path')
const app = express()
const port = 3000

/* Requerir las rutas */
let indexRouter = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  'ejs')

/* Middlewares */
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

/* Rutas */
app.use('/', indexRouter)
app.use('/categories', indexRouter)
app.use('/cart1', indexRouter)
app.use('/cart2', indexRouter)
app.use('/login', indexRouter)
app.use('/productDetail', indexRouter)
app.use('/register', indexRouter)
app.use('perfil', indexRouter)

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))