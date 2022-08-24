
module.exports = {
    home: (req,res) => {
        return res.render('home')
    },
    categories: (req,res) => {
        return res.render('categories')
    },
    cart1: (req,res) => {
        return res.render('cart1')
    },
    cart2: (req,res) => {
        return res.render('cart2')
    },
    login: (req,res) => {
        return res.render('login')
    },
    productDetail: (req,res) => {
        return res.render('productDetail')
    },
    register: (req,res) => {
        return res.render('register')
    },
    perfil: (req,res) => {
        return res.render('perfil')
    }
}