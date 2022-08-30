<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
const productos = require('../data/productos.json')
const historial = require('../data/historial.json')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
,JSON.stringify(dato,null,4),'utf-8')
const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
,JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    create: (req,res) => {
        return res.render('admin/crearProducto')
    },
    list: (req,res) => {
        return res.render('admin/listaProductos',{
            productos,
            redirection: "history"
        })
    },
    edit: (req,res) => {
        let categorias = ['Smartphones', 'Tablets', 'Notebooks']
        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        })
        return res.render('admin/editarProducto',{
            producto,
            categorias
        })
    },
    store:(req,res) => {
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            marca:Marca,
            titulo:Titulo,
            categorias:Categoria,
            precio:+Precio,
            descuento:+Descuento,
            stock:+Stock,
            descripcion:Descripcion,
            imagenes: [
                "default-image.png",
                "default-image.png",
                "default-image.png",
                "default-image.png"
            ],
        }

        productos.push(productoNuevo)
        guardar(productos)
        /* Redirección a la lista de productos */
        return res.redirect('/admin/list')
    },
    update:(req,res) => {
        idParams = +req.params.id
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = Marca
                producto.titulo = Titulo
                producto.categorias = Categoria
                producto.precio = +Precio
                producto.descuento = +Descuento
                producto.stock = +Stock
                producto.descripcion = Descripcion
            }
        })
        guardar(productos)
        return res.redirect('/admin/list')
    },
    destroy:(req,res) => {
        idParams = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/admin/history')
    },
    history : (req,res) => {

        return res.render('admin/listaProductos',{
            productos: historial,
            redirection: "list"
        })
=======
let fs = require('fs')
const { join } = require('path')
let path = require('path')
let products = require('../data/products.json')
let guardarProductos = (dato) => fs.writeFileSync(path.join(__dirname,"../data/products.json"),JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    create :(req, res) =>{
        return res.render('admin/create');
    },
    
    store: (req, res) => {
            let {name,description,category,discount,price,details,image,stock,moreDetails} = req.body;

            let newMoreDetails = moreDetails.split('--');
            let newDetails = details.split('--');
            let newImage = image.split();
            
            let newProduct = {
                id: products[products.length - 1].id + 1,
                name: name,
                description: description,
                category: category,
                stock: +stock,
                price: +price,
                discount: +discount,
                details: newDetails,
                moreDetails: newMoreDetails,
                image: newImage,
            }

            products.push(newProduct)
            guardarProductos(products)

            /* Redirecciona a la lista de productos en admin*/
            return res.redirect('/admin/list')
        },
    list :(req, res) =>{
        return res.render('admin/list',{
            products
        });
    },
    
    edit :(req, res) =>{
        let id = +req.params.id
        let productoAEditar = products.find(producto => producto.id === id)
        return res.render('admin/edit',{
            producto:productoAEditar
        });
    },

    update :(req,res) =>{
        let id = +req.params.id
        let {name,description,category,discount,price,details,image,stock,moreDetails} = req.body
        products.forEach(producto => {
            if (producto.id === id) {
                producto.name = name
                producto.description = description
                producto.category = category
                producto.discount = +discount
                producto.price = +price
                producto.details = details.split('--')
                producto.stock = +stock
                producto.moreDetails = moreDetails.split('--')
            }
        })
        guardarProductos(products)
        return res.redirect(`/admin/list`)
    },

    trash:(req,res)=>{
        let id = +req.params.id
        let productosActualizados = products.filter(producto => producto.id !== id)
        guardarProductos(productosActualizados)
        return res.redirect('/admin/list')
>>>>>>> 6cfeb4df41915a17dfd40ce693c8b50147f4da2c
    }
}