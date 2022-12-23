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
        console.log(req.files)
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
            const { marca, Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body
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
                categorias_id: +Categoria,
                marcas_id: +marca,
            }, {
                where: {
                    id: idParams
                }
            })

            Promise.all([producto, actualizacion])
                .then(([producto, actualizacion]) => {
                    let imagen1
                    let imagen2
                    let imagen3
                    let imagen4
                    let promesas = []

                /* Imagen 1 */
                /* Existe en la base de datos */
                if (producto.imagenes[0].length !== 0) {
                    /* viene una imagen nueva */
                    if(!!req.files.imagen1){
                        /* Guardo el nombre en una variable para despues borrarla */
                        imagen1 = producto.imagenes[0].nombre
                        /* La reemplazamos en la base de datos */
                        promesas.push(
                            db.Imagenes.update({
                            nombre:req.files.imagen1[0].filename
                        },{
                            where: {
                                id : producto.imagenes[0].id
                            }
                        }))
                        /* Borramos la imagen anterior */
                        if(fs.existsSync(path.join(__dirname,'../../public/img/products',imagen1))){
                            fs.unlinkSync(path.join(__dirname,'../../public/img/products', imagen1))
                        }
                    }
                }else{
                    /* Si no existe la imagen en la base de datos, tenemos que crearla */
                    if(!!req.files.imagen1){

                        /* Creamos la imagen en la base de datos */
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen1[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                /* Imagen 2 */
                if (producto.imagenes[1].length !== 0) {
                    if(!!req.files.imagen2){
                        imagen2 = producto.imagenes[1].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen2[0].filename
                        },{
                            where: {
                                id : producto.imagenes[1].id
                            }
                        }))
                        if(fs.existsSync(path.join(__dirname,'../../public/img/products',imagen2))){
                            fs.unlinkSync(path.join(__dirname,'../../public/img/products', imagen2))
                        }
                    }
                }else{
                    if(!!req.files.imagen2){
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen2[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                /* Imagen 3 */
                if (producto.imagenes[2].length !== 0) {
                    if(!!req.files.imagen3){
                        imagen3 = producto.imagenes[2].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen3[0].filename
                        },{
                            where: {
                                id : producto.imagenes[2].id
                            }
                        }))
                        if(fs.existsSync(path.join(__dirname,'../../public/img/products',imagen3))){
                            fs.unlinkSync(path.join(__dirname,'../../public/img/products', imagen3))
                        }
                    }
                }else{
                    if(!!req.files.imagen3){
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen3[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                /* Imagen 4 */
                if (producto.imagenes[3].length !== 0) {
                    if(!!req.files.imagen4){
                        imagen4 = producto.imagenes[3].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen4[0].filename
                        },{
                            where: {
                                id : producto.imagenes[3].id
                            }
                        }))
                        if(fs.existsSync(path.join(__dirname,'../../public/img/products',imagen4))){
                            fs.unlinkSync(path.join(__dirname,'../../public/img/products', imagen4))
                        }
                    }
                }else{
                    if(!!req.files.imagen4){
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen4[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                Promise.all(promesas)
                .then(promesas => {
                    return res.redirect('/admin/list')
                })
            })
            .catch(error => res.send(error))
        } else {
            console.log(errors.mapped()) 
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
                    marcas,
                    errors:errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => res.send(error))
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

