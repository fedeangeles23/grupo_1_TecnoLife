const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))
app.get('/crearCuenta', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')))
app.get('/ingresar', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')))
app.get('/detalleDeProducto', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productDetail.html')))
app.get('/procesoDeCompra1', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'cart1.html')))
app.get('/procesoDeCompra2', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'cart2.html')))
app.get('/categorias', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'categories.html')))

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))