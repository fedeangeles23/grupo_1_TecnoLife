const fs = require('fs')
const path = require('path')
/*const productos = require('../data/productos.json')*/
/*const historial = require('../data/historial.json')*/
let db = require('../database/models')
const { validationResult } = require('express-validator')

//const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
//,JSON.stringify(dato,null,4),'utf-8')
//const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
//,JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    list: (req, res) => {
        db.Productos.findAll({
            include: [{
                all: true
            }]
        })
            .then(productos => {
                return res.render('admin/listaProductos', {
                    productos,
                    redirection: "history"
                })
            })
    },
    create: (req, res) => {
        let categorias = db.categorias.findAll()
        let marcas = db.marcas.findAll()
        Promise.all([categorias, marcas])
            .then(([categorias, marcas]) => {
                return res.render('admin/crearProducto', {
                    categorias,
                    marcas
                })
            }).catch(error => res.send(error))


        // return res.render('admin/crearProducto')

    },

    store: (req, res) => {
        /* console.log(req.files) */
        let errors = validationResult(req)
        /*          console.log(req.body)
        console.log("llegando") */
        /*         return res.send(errors.mapped())  */
        if (req.fileValidationError) {
            let imagenes = {
                param: 'imagen',
                msg: req.fileValidationError
            }
            errors.errors.push(imagenes)
        }

        if (errors.isEmpty()) {

            let { marca, titulo, categoria, Precio, Descuento, Stock, descripcion } = req.body

            db.Productos.create({
                nombre: titulo,
                precio: +precio,
                descuento: +descuento,
                stock: +stock,
                descripcion,
                categoriasId: +categoria,
                marcasId: +marca,
            })
                .then(productoNuevo => {

                    if (req.files) {
                        let img = req.files.map(imagen => {
                            let nuevo = {
                                nombre: imagen.filename,
                                productosId: productoNuevo.id
                            }
                            return nuevo
                        })
                        db.Imagenes.bulkCreate(img)
                            .then(imagen => {
                                return res.redirect('/admin/listaProductos')
                            })
                    } else {
                        db.Imagenes.create({
                            nombre: 'default-image.png',
                            productosId: productoNuevo.id
                        })
                            .then(imagenes => {
                                return res.redirect('/admin/listaProductos')
                            })
                    }
                })
                .catch(error => res.send(error))
        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'productos', dato))

            req.files.forEach(imagen => {
                if (ruta(imagen) && (imagen !== "default-image.png")) {
                    fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', 'productos', imagen))
                }
            })
            return res.render('admin/crearProducto', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    //
    //
    edit: (req, res) => {
        let idParams = +req.params.id
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
        let producto = db.Productos.findOne({
            where: {
                id: idParams
            },
            include: [{
                all: true
            }]
        })
        Promise.all([categorias, marcas, producto])
            .then(([categorias, marcas, producto]) => {
                return res.render('admin/editarProducto', {
                    producto,
                    categorias,
                    marcas
                })
            })
            .catch(error => res.send(error))


    },


    update: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            const idParams = +req.params.id
            const { marca, titulo, categoria, precio, descuento, stock, descripcion } = req.body
            let producto = db.Productos.findOne({
                where: {
                    id: idParams
                },
                include: [{
                    all: true
                }]
            })
            let actualizacion = db.Productos.update({
                nombre: Titulo,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion,
                categoriasId: +categoria,
                marcasId: +marca,
            }, {
                where: {
                    id: idParams
                }
            })

            Promise.all([producto, actualizacion])
                .then(([producto, actualizacion]) => {
                    if (req.files) {
                        db.Imagenes.update({
                            nombre: req.files[0].filename,
                            productosId: producto.id
                        }, {
                            where: {
                                id: producto.imagenes[0].id
                            }
                        })
                            .then(data => {
                                return res.redirect('/admin/listaProductos')
                            })
                    } else {
                        return res.redirect('/admin/listaProductos')
                    }
                })
                .catch(error => res.send(error))
        } else {
            return res.render('admin/crearProducto', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    destroy: (req, res) => {

        let idParams = +req.params.id
        db.Productos.findOne({
            where: {
                id: idParams
            },
            include: [{
                all: true
            }]
        })
            .then(producto => {

                db.Historiales.create({
                    nombre: producto.nombre,
                    precio: producto.precio,
                    descuento: producto.descuento,
                    stock: producto.stock,
                    descripcion: producto.descripcion,
                    categoriasId: producto.categoriasId,
                    marcasId: producto.marcasId,
                })
                    .then(historial => {
                        let promesas = []

                        let imagen1 = db.HistorialImagenes.create({
                            nombre: producto.imagenes[0].nombre,
                            historialId: historial.id
                        })
                        let imagen2 = db.HistorialImagenes.create({
                            nombre: producto.imagenes[1].nombre,
                            historialId: historial.id
                        })
                        let imagen3 = db.HistorialImagenes.create({
                            nombre: producto.imagenes[2].nombre,
                            historialId: historial.id
                        })
                        let imagen4 = db.HistorialImagenes.create({
                            nombre: producto.imagenes[3].nombre,
                            historialId: historial.id
                        })

                        Promise.all([imagen1, imagen2, imagen3, imagen4])
                            .then(([imagen1, imagen2, imagen3, imagen4]) => {
                                db.Productos.destroy({
                                    where: {
                                        id: idParams
                                    }
                                })
                                    .then(producto => {
                                        return res.redirect('/admin/history')
                                    })
                            })
                    })
            })
            .catch(error => res.send(error))
    },
    history: (req, res) => {
        db.Historiales.findAll({
            include: [{
                all: true
            }]
        })
            .then(historial => {
                // return res.send(historial) 
                return res.render('admin/listaProductos', {
                    productos: historial,
                    redirection: "list"
                })
            })

    },
    restore: (req, res) => {
        let idParams = +req.params.id
        db.Historiales.findOne({
            where: {
                id: idParams
            },
            include: [{
                all: true
            }]
        })
            .then(historialProducto => {
                db.Productos.create({
                    nombre: historialProducto.nombre,
                    precio: historialProducto.precio,
                    descuento: historialProducto.descuento,
                    stock: historialProducto.stock,
                    descripcion: historialProducto.descripcion,
                    categoriasId: historialProducto.categoriasId,
                    marcasId: historialProducto.marcasId,
                })
                    .then(productoNuevo => {
                        let imagen1 = db.Imagenes.create({
                            nombre: historialProducto.imagenes[0].nombre,
                            productoId: productoNuevo.id
                        })
                        let imagen2 = db.Imagenes.create({
                            nombre: historialProducto.imagenes[1].nombre,
                            productoId: productoNuevo.id
                        })
                        let imagen3 = db.Imagenes.create({
                            nombre: historialProducto.imagenes[2].nombre,
                            productoId: productoNuevo.id
                        })
                        let imagen4 = db.Imagenes.create({
                            nombre: historialProducto.imagenes[3].nombre,
                            productoId: productoNuevo.id
                        })
                        Promise.all([imagen1, imagen2, imagen3, imagen4])
                            .then(([imagen1, imagen2, imagen3, imagen4]) => {
                                db.Historiales.destroy({
                                    where: {
                                        id: idParams
                                    }
                                })
                                    .then(eliminar => {
                                        return res.redirect('/admin/listaProductos')
                                    })
                            })
                    })
            })
            .catch(errores => res.send(errores))
    },
    crash: (req, res) => {
        idParams = +req.params.id

        db.Historiales.findOne({
            where: {
                id: idParams
            },
            include: [{
                all: true
            }]
        })
            .then(producto => {
                let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'img', 'productos', dato))

                producto.imagenes.forEach(imagen => {
                    if (ruta(imagen.nombre) && (imagen.nombre !== "default-image.png")) {
                        fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'img', 'productos', imagen.nombre))
                    }
                })
                db.Historiales.destroy({
                    where: {
                        id: idParams
                    }
                })
                    .then(eliminar => {
                        return res.redirect('/admin/listaProductos')
                    })
            })
            .catch(errores => {
                res.send(errores)
            })
    },
}

  //  let historialModificado = historial.filter(producto => producto.id !== idParams)
    //guardarHistorial(historialModificado)
    //return res.redirect('/admin/list')

