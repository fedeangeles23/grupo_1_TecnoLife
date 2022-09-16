const fs = require('fs')
const path = require('path')
const productos = require('../data/productos.json')
const historial = require('../data/historial.json')
const{validationResult}= require ('express-validator')

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
        //return res.send(req.file)
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        /* console.log(req.body);
  return res.send(errors.mapped()) */
       if (errors.isEmpty()) {
        /* let img = req.files.map(imagen => {
            return imagen.filename
        }) */

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
            imagenes: (req.files.length === 4) ? img : ['default-img.webp','default-img.webp','default-img.webp','default-img.webp']
        }

        productos.push(productoNuevo)
        guardar(productos)
        /* Redirección a la lista de productos */
        return res.redirect('/admin/list')
    
        }else{
             /* return res.send(errors.mapped())*/
            return res.render('admin/crearProducto',{
                errors : errors.mapped(),
                old: req.body
            })
        }

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
            redirection: "list",
        })
    },
    restore: (req,res) => {
        idParams = +req.params.id

        let productoParaRestaurar = historial.find((elemento) => {
            return elemento.id == idParams
        })

        productos.push(productoParaRestaurar)
        guardar(productos)

        let historialModificado = historial.filter(producto => producto.id !== idParams)
        guardarHistorial(historialModificado)

        return res.redirect('/admin/list')
    }
}