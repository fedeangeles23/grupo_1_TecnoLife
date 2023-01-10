const fs = require('fs')
const path = require('path')
const db = require('../../database/models');
const bcryptjs = require('bcryptjs')

module.exports = {
    usuarios: (req, res) => {
        db.Usuarios.findAll({
            include: [{ all: true }]
        })
            .then(usuarios => {
                // return res.status(200).send(usuarios)
                let dataUsers = usuarios.map(element => {
                    let usuario = {
                        id: element.id,
                        first_name: element.nombre,
                        last_name: element.apellido,
                        email: element.email,
                        ciudad: element.ciudad,
                        direccion: element.direccion,
                        codigopostal: element.codigopostal,
                        imagen: element.imagen,
                        rol: element.rol,
                        detail: `http://localhost:3001/api/users/${element.id}`,
                    }
                    return usuario
                });

                let users = {
                    status: 200,
                    meta: {
                        users: 'LISTA DE USUARIOS',
                        count: usuarios.length,
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: dataUsers,
                }
                return res.status(200).json(users)
            })
            .catch(error => res.status(500).send(error))
    },
    usuariosPag: async (req, res) => {

        const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

        try {
            let { orderBy, orderDirect, page, size, ...updateQuery } = req.query;

            const order = orderBy ? orderBy : 'id';
            const direction = orderDirect ? orderDirect : 'ASC';
        

            for (const key in updateQuery) {
                if (key === 'nombre' || key === 'apellido' || key === 'roles_id') {

                    if (updateQuery[key] === null || updateQuery[key].trim().length === 0) {
                        delete updateQuery[key];
                    } else {
                        if (key === 'nombre') {
                            updateQuery[key] = { [Op.substring]: req.query.nombre.trim() };
                        };
                    }
                } else {
                    delete updateQuery[key];
                    url.searchParams.delete(key);
                };
            };
           

            const getPagination = (page, size) => {
                const limit = size ? +size : 10;
                const offset = page ? (page - 1) * limit : 0;

                return { limit, offset };
            }
            const { limit, offset } = getPagination(page, size);

            const getPageData = (data, page, limit) => {
                const { count, rows: result } = data;
                const pages = Math.ceil(count / limit);
                const currentPage = page ? +page : 1;

                if (currentPage > pages) {
                    throw new SyntaxError();
                } else {
                    let next_page = '';
                    let previous_page = '';

                    if (url.searchParams.has('page')) {
                        if (!url.searchParams.has('size')) {
                            url.searchParams.set('size', 'limit');
                        };

                        if (currentPage == 1) {
                            url.searchParams.set('page', (currentPage + 1));
                            next_page = url.href;
                        } else {
                            url.searchParams.set('page', (currentPage - 1));
                            previous_page = url.href;
                            url.searchParams.set('page', (currentPage + 1));
                            next_page = url.href;
                        };
                    } else {
                        url.searchParams.set('page', (currentPage + 1));
                        url.searchParams.set('size', 'limit');
                        next_page = url.href
                    }

                    const next = (currentPage === pages) ? null : next_page;
                    const previous = (currentPage === 1) ? null : previous_page;

                    return { count, pages, next, previous, result };
                }
            }
            // traer datos de productos y sus relaciones

            let data = await db.users.findAndCountAll({
                where: updateQuery,
                order: [[order, direction]],
                include: [
                    {
                        association: 'rol',
                        attributes: ['title']
                    },
                    {
                        association: 'imagenesAvatar',
                        attributes: ['name']
                    }
                ],
                limit,
                offset
            });

            let { count, pages, previous, next, result } = getPageData(data, page, limit);

            return res.status(200).json({
                count,
                pages,
                previous,
                next,
                result
            });

        } catch (error) {
            res.status(500).json({
                msg: 'ha ocurrido un error'
            });
        };

    },
    usuarioPorId: (req, res) => {
        const id = req.params.id;
        db.users.findByPk(id, {
            include: [{ all: true }]
        })
            .then(usuario => {

                let user = {
                    status: 200,
                    meta: {
                        users: 'USUARIO ESPECIFICO',
                        rol: usuario.rol.title,
                        imgAvatar: "www.rutagenerica.com",
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                        volverAListaDeUsers: `http://localhost:3001/api/users/`
                    },
                    data: {
                        id: usuario.id,
                        first_name: usuario.nombre,
                        last_name: usuario.apellido,
                        email: usuario.email,
                        genre: usuario.genero,
                        contact: usuario.contacto,
                        roles_id: usuario.roles_id,
                        createdAt: usuario.createdAt,
                    }
                }

                return res.status(200).json(user)
            })
    },

    /* productos apis */
    productos: (req, res) => {

        db.Productos.findAll({ include: [{ all: true }] })
            .then(productos => {

                let list = {
                    status: 200,
                    meta: {
                        product: 'LISTA DE PRODUCTOS',
                        count: productos.length,
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: productos,
                }
                return res.status(200).json(list)
            })
            .catch(error => res.status(500).send(error))

    },
    catymarca: (req, res) => {
        let marcas = db.Marcas.findAll()
        let categorias = db.Categorias.findAll()
        Promise.all([marcas, categorias])

            .then(([marcas, categorias]) => {

                let list = {
                    status: 200,
                    meta: {
                        msg: 'LISTA DE MARCAS Y CATEGORÍAS',
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: {
                        marcas: marcas,
                        categorias: categorias
                    },
                }
                return res.status(200).json(list)
            })
            .catch(error => res.status(500).send(error))

    },
    productosPorId: (req, res) => {
        const id = req.params.id;
        db.Productos.findOne({
            where: {
                id: id
            },
            include: [{ all: true }]
        })
            .then(productos => {
                let array = []
                array.push(productos)
                let user = {
                    status: 200,
                    meta: {
                        product: 'PRODUCTO ESPECIFICO',

                        imgProduct: "www.rutagenerica.com",
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                        volverAListaDePrductos: `http://localhost:3001/api/productos/`
                    },
                    data: array
                }
                return res.status(200).json(user)
            })
    },
    crearProducto: (req, res) => {
        // return res.send('holiss')

        const { Titulo, Precio, Descuento, Stock, Descripcion, Categoria, Marca } = req.body;
        const img = req.file
        let array = []
        console.log(req.body);
        db.Productos.create({
            nombre: Titulo,
            precio: +Precio,
            descuento: +Descuento,
            stock: +Stock,
            descripcion: Descripcion,
            categorias_id: +Categoria,
            marcas_id: +Marca,
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
                            let result = {
                                status: 200,
                                meta: {
                                    msg: 'Producto creado',
                                    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                                },
                                data: productoNuevo,
                            }
                            return res.status(200).json(result)
                        })
                } else {
                    db.Imagenes.create({
                        nombre: 'default-image.png',
                        producto_id: productoNuevo.id
                    })
                        .then(imagenes => {
                            let result = {
                                status: 200,
                                meta: {
                                    msg: 'Producto creado',
                                    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                                },
                                data: productoNuevo,
                            }
                            return res.status(200).json(result)
                        })
                }
            })
            
            .catch(errors => res.status(500).send(errors))


    },
    editarProducto: (req, res) => {

        let id = req.params.id
        const img = req.file

        let { Titulo, Precio, Descuento, Stock, Descripcion, Categoria, Marca } = req.body

        console.log(req.body);

        let producto = db.Productos.findOne({
            where: {
                id: id
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
            marcas_id: +Marca,
        }, {
            where: {
                id: id
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
                    if (!!req.files.imagen1) {
                        /* Guardo el nombre en una variable para despues borrarla */
                        imagen1 = producto.imagenes[0].nombre
                        /* La reemplazamos en la base de datos */
                        promesas.push(
                            db.Imagenes.update({
                                nombre: req.files.imagen1[0].filename
                            }, {
                                where: {
                                    id: producto.imagenes[0].id
                                }
                            }))
                        /* Borramos la imagen anterior */
                        /* if (fs.existsSync(path.join(__dirname, '../../public/img/products', imagen1))) {
                            fs.unlinkSync(path.join(__dirname, '../../public/img/products', imagen1))
                        } */
                    }
                } else {
                    /* Si no existe la imagen en la base de datos, tenemos que crearla */
                    if (!!req.files.imagen1) {

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
                    if (!!req.files.imagen2) {
                        imagen2 = producto.imagenes[1].nombre
                        promesas.push(
                            db.Imagenes.update({
                                nombre: req.files.imagen2[0].filename
                            }, {
                                where: {
                                    id: producto.imagenes[1].id
                                }
                            }))
                        /* if (fs.existsSync(path.join(__dirname, '../../public/img/products', imagen2))) {
                            fs.unlinkSync(path.join(__dirname, '../../public/img/products', imagen2))
                        } */
                    }
                } else {
                    if (!!req.files.imagen2) {
                        promesas.push(
                            db.Imagenes.create({
                                nombre: req.files.imagen2[0].filename,
                                productosId: producto.id
                            }))
                    }
                }
                /* Imagen 3 */
                if (producto.imagenes[2].length !== 0) {
                    if (!!req.files.imagen3) {
                        imagen3 = producto.imagenes[2].nombre
                        promesas.push(
                            db.Imagenes.update({
                                nombre: req.files.imagen3[0].filename
                            }, {
                                where: {
                                    id: producto.imagenes[2].id
                                }
                            }))
                        /* if (fs.existsSync(path.join(__dirname, '../../public/img/products', imagen3))) {
                            fs.unlinkSync(path.join(__dirname, '../../public/img/products', imagen3))
                        } */
                    }
                } else {
                    if (!!req.files.imagen3) {
                        promesas.push(
                            db.Imagenes.create({
                                nombre: req.files.imagen3[0].filename,
                                productosId: producto.id
                            }))
                    }
                }
                /* Imagen 4 */
                if (producto.imagenes[3].length !== 0) {
                    if (!!req.files.imagen4) {
                        imagen4 = producto.imagenes[3].nombre
                        promesas.push(
                            db.Imagenes.update({
                                nombre: req.files.imagen4[0].filename
                            }, {
                                where: {
                                    id: producto.imagenes[3].id
                                }
                            }))
                        /* if (fs.existsSync(path.join(__dirname, '../../public/img/products', imagen4))) {
                            fs.unlinkSync(path.join(__dirname, '../../public/img/products', imagen4))
                        } */
                    }
                } else {
                    if (!!req.files.imagen4) {
                        promesas.push(
                            db.Imagenes.create({
                                nombre: req.files.imagen4[0].filename,
                                productosId: producto.id
                            }))
                    }
                }
                Promise.all(promesas)
                    .then(promesas => {

                        let result = {
                            status: 200,
                            meta: {
                                msg: 'Producto editado',
                                url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                            },
                            data: 'Producto editado correctamente',
                        }
                        return res.status(200).json(result)
                    })
            })

            .catch(errors => res.status(500).send(errors))



    },

    eliminarProducto: (req, res) => {
        const id = +req.params.id;

        let buscar = db.Productos.findOne({
            where: {
                id: id
            },
            include: [{
                all: true
            }]
        })
        let destroy = db.Productos.destroy({
            where: {
                id: id
            }
        })
        let imagenes = db.Imagenes.destroy({
            where: {
                producto_id: id
            }
        })
        Promise.all([buscar, destroy, imagenes])
            .then(([buscar, destroy, imagenes]) => {

                let result = {
                    status: 200,
                    meta: {
                        msg: 'Producto eliminado',
                        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: 'Producto Eliminado',
                }
                return res.status(200).json(result)

            })
    }
}