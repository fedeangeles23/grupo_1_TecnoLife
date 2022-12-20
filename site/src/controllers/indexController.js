let productos = require('../data/productos.json')

module.exports = {
    home: (req,res) => {
        return res.render('home',{
            productos
        })
    },
    categories: (req,res) => {
        return res.render('categories')
    },
    cart1: (req,res) => {
        res.render('cart1')
    },
    cart2: (req,res) => {
        res.render('cart2')
    },
    cart3: (req,res) => {
        res.render('cart3')
    },
    login: (req,res) => {
        return res.render('login')
    },
    register: (req,res) => {
        return res.render('register')
    },
    profile: (req,res) => {
        return res.render('profile')
    }
}