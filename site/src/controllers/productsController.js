//let productos = require('../data/productos.json')
let db = require('../database/models');
let Sequelize = require('sequelize')

module.exports ={
    detail: (req,res) =>{
        let idParams= +req.params.id;
        db.Productos.findByPk(idParams,{
            include : [{
                all : true
            }]
        })
        .then(producto => {

            db.Productos.findAll({
                where : {
                    categoriasId: producto.categoriasId
                },
                limit : 4,
                order : [[Sequelize.literal("RAND()")]],
                include : [{
                    all : true
            }]
            
        })
        //
            .then(productos => {
            return res.render('productDetail',{
                producto,
                productos
            })
        })})
        .catch(error => res.send(error))
    },
    cart: (req,res) =>{
        let idParams= +req.params.id;
        db.Productos.findByPk(idParams,{
            include : [{
                all : true
            }]
        })
        .then(producto => {

            db.Productos.findAll({
                where : {
                    categoriasId: producto.categoriasId
                },
                limit : 4,
                order : [[Sequelize.literal("RAND()")]],
                include : [{
                    all : true
            }]
            })
            .then(productos => {
            return res.render('productCart',{
                producto,
                productos
            })
        })})
        .catch(error => res.send(error))


    },
    list: (req,res) =>{
        db.Productos.findAll({
            include : [{
                all : true
        }]
        })
        .then(productos => {
            let imagenes= [] 
            productos.forEach(producto =>{
                imagenes.push(producto.imagenes)
            })
            return res.render('listaProductos',{productos})
    })
    .catch(error => res.send(error))

    },
    categoria : (req,res) => {
        let categoriaSeleccionada = req.params.categoria
        db.Categorias.findOne({
            where : {
                nombre : categoriaSeleccionada
            },
            include : [{
                association : 'productos',
                include: [{
                    all : true
                }]
            }]
        })
        .then(categorias => {
           return res.render('products',{
                categorias
            })
        })
        .catch(error => res.send(error))

    },
}