const express = require('express')
const methodOverride = require('method-override')
<<<<<<< HEAD
const cookieParser = require('cookie-parser');
=======
>>>>>>> 6cfeb4df41915a17dfd40ce693c8b50147f4da2c
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
<<<<<<< HEAD
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products')
=======
let indexRouter = require('./routes/index')
>>>>>>> 6cfeb4df41915a17dfd40ce693c8b50147f4da2c
let adminRouter = require('./routes/admin');

/* Rutas */
app.use('/', indexRouter)
<<<<<<< HEAD
app.use('/products', productsRouter)
app.use('/users', usersRouter)
=======
app.use('/login', indexRouter)
app.use('/register', indexRouter)
app.use('/categories', indexRouter)
app.use('/productDetail', indexRouter)
app.use('/cart1', indexRouter)
app.use('/cart2', indexRouter)
>>>>>>> 6cfeb4df41915a17dfd40ce693c8b50147f4da2c
app.use('/admin', adminRouter)

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))