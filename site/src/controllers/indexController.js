let productos = require('../data/productos.json')

module.exports = {
    home: (req,res) => {
        return res.render('home',{
            productos
        })
    },
    categories: (req,res) => {
        return res.render('categories')
    }
}