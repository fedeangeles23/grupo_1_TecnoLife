const express = require('express')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express()
const port = 3000;

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  'ejs')

/* Trabajar con metodos HTTP (post) */
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

/* Trabajar con put y delete */
app.use(methodOverride('_method'))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Middlewares */
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

/* Requerir las rutas */
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products')
let adminRouter = require('./routes/admin');

/* Rutas */
app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/admin', adminRouter)
/* app.use('/categories', indexRouter)
app.use('/carrito', indexRouter) */
/* app.use('/register', usersRouter)
app.use('/profile', usersRouter) */

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))
