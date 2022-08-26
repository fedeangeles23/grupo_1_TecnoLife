const express = require('express')
const methodOverride = require('method-override')
const path = require('path');
const adminController = require('./controllers/adminController');
const app = express()
const port = 3000;

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  'ejs')

/* Middlewares */
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

/* Requerir las rutas */
let indexRouter = require('./routes/index')
let adminRouter = require('./routes/admin');

/* Rutas */
app.use('/', indexRouter)
app.use('/login', indexRouter)
app.use('/register', indexRouter)
app.use('/categories', indexRouter)
app.use('/productDetail', indexRouter)
app.use('/cart1', indexRouter)
app.use('/cart2', indexRouter)
app.use('/admin', adminRouter)

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))