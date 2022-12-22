const fs = require('fs')
const path = require('path')
let db = require('../database/models')
const { validationResult } = require('express-validator')
module.exports = {
    list: (req, res) => {
        db.Productos.findAll({
            include: [{all: true}]
        })
            .then(productos => {
                return res.render('admin/listaProductos', {
                    productos,
                    redirection: "history"
                })
            })
    },
    create: (req, res) => {
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
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
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagenes = {
                param: 'imagen',
                msg: req.fileValidationError
            }
            errors.errors.push(imagenes)
        }

        if (errors.isEmpty()) {

            let { marca, Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body

            db.Productos.create({
                nombre: Titulo,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion,
                categorias_id: +Categoria,
                marcas_id: +marca,
            })
                .then(productoNuevo => {
                    console.log(req.files)
                    if (req.files.length > 0) {
                        let img = req.files.map(imagen => {
                            let nuevo = {
                                nombre: imagen.filename,
                                producto_id: productoNuevo.id
                            }
                            return nuevo
                        })
                        db.Imagenes.bulkCreate(img)
                            .then(imagen => {
                                return res.redirect('/admin/list')
                            })
                    } else {
                        db.Imagenes.create({
                            nombre: 'default-image.png',
                            producto_id: productoNuevo.id
                        })
                            .then(imagenes => {
                                return res.redirect('/admin/list')
                            })
                            .catch(error => res.send(error))
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

            let categorias = db.Categorias.findAll()
            let marcas = db.Marcas.findAll()
            Promise.all([categorias, marcas])
                .then(([categorias, marcas]) => {
                    return res.render('admin/crearProducto', {
                        categorias,
                        marcas,
                        errors: errors.mapped(),
                        old: req.body
                    })
                }).catch(error => res.send(error))

        }
    },
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
}
  //  let historialModificado = historial.filter(producto => producto.id !== idParams)
    //guardarHistorial(historialModificado)
    //return res.redirect('/admin/list')

