const express = require('express')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express()
const session = require("express-session")
const userLogin = require ('./middlewares/userLoginCheck')
const port = 3001;
const cors = require('cors')

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  'ejs')

/* Trabajar con metodos HTTP (post) */
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended : false }))

/* Trabajar con put y delete */
app.use(methodOverride('_method'))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Middlewares */
app.use(express.json())
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "La Comision 17"
  }))
  
  app.use(userLogin)
/* Requerir las rutas */
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products')
let adminRouter = require('./routes/admin');
let apiRouter = require('./routes/api/apis')

/* Rutas */
app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/admin', adminRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))