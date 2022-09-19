let productos = require('../data/productos.json')

module.exports = {
    productDetail : (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('productDetail',{
            producto : productoEnDetalle,
            productos
        })
    },
    cart1: (req,res) => {
        res.render('cart1')
    },
    cart2: (req,res) => {
        res.render('cart2')
    },
    cart3: (req,res) => {
        res.render('cart3')
    }
}