let productos = require('../data/productos.json')

module.exports = {
    detail : (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('detail',{
            producto : productoEnDetalle,
            productos
        })
    },
    cart: (req,res) => {
        res.render('cart')
    },
}