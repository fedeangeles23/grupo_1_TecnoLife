let productos = require('../data/productos.json')

module.exports = {
    productDetail : (req,res) => {
        let id = +req.params.id
        let producto = productos.find((producto) => producto.id === id)
        return res.render ('productDetail',{producto})
    },
    carrito: (req,res) => {
        res.render('carrito')
    },
}