const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../database/models')
const { name } = require('ejs')
const { use } = require('../routes/users')


module.exports = {
    register: (req, res) => {
        return res.render('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let { name, email, pass, } = req.body


            db.Usuarios.create({
                nombreUsuario: null,
                nombre: name,
                apellido: null,
                genero: null,
                email: email,
                password: bcrypt.hashSync(pass, 12),
                ciudad: null,
                rol: 2,
                imagen: "default-avatar.png",
            })

                .then(usuario => {
                    req.session.userLogin = {
                        id: usuario.id,

                        nombre: usuario.nombre,
                        email: usuario.email,
                        apellido: usuario.apellido,
                        direccion:usuario.direccion ,
                        codigopostal:usuario.codigopostal ,
                        género: usuario.género,
                        ciudad: usuario.ciudad,
                        imagen: usuario.imagen,
                        rol: usuario.rol
                    }
                    return res.redirect('/')
                })
                .catch(errores => res.send(errores))
        } else {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            console.log("usuariologeado");
            const { email, recordarme } = req.body
            db.Usuarios.findOne({
                where: {
                    email
                }
            })
                .then(usuario => {
                    req.session.userLogin = {
                        id: usuario.id,
                        nombre: usuario.nombre,
                    /*    nombre: usuario.nombre,*/
                        email: usuario.email,
                        direccion:usuario.direccion ,
                        codigopostal:usuario.codigopostal ,
                        apellido: usuario.apellido,
                        género: usuario.género,
                        ciudad: usuario.ciudad,
                        imagen: usuario.imagen,
                        rol: usuario.rol
                    }/**/
                    if (recordarme) {
                        res.cookie('TecnoLife', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                    return res.redirect('/users/perfil')
                })
                .catch(errores => res.send(errores))
        } else {
            return res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    logout: (req, res) => {

        req.session.destroy();
        if (req.cookies.TecnoLife) {
            res.cookie('TecnoLife', '', { maxAge: -1 })
        }
        return res.redirect('/')
    },
    updatePerfil: (req, res) => {
        console.log(req.body);

        let session = req.session.userLogin
        let id = +session.id

        let errors = validationResult(req)

        if (req.fileValidationError) {
            let image = {
                param: "imagen",
                msg: req.fileValidationError
            }
            errors.errors.push(image)
        }
        if (errors.isEmpty()) {
            const {nombre, apellido, genero,direccion,codigopostal,ciudad,  } = req.body

            db.Usuarios.findOne({
                where: {
                    id: req.params.id
                }
            })
                .then(user => {
console.log(user);
                    db.Usuarios.update({
                        nombre: nombre.trim(),
                        apellido:apellido.trim(),
                        genero:genero ,
                        email:user.email ,
                        password:user.password ,
                        ciudad:ciudad,
                        direccion:direccion ,
                        codigopostal:codigopostal ,
                        imagen: req.file ? req.file.filename : user.imagen,
                        rol:user.rol ,
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(image => {

                        db.Usuarios.findOne({
                            where: {
                                id: req.params.id
                            }
                        })              
                        .then(usuario=>{
                            req.session.userLogin = {
                                id: usuario.id,
                                nombre: usuario.nombre,
                       /*         nombre: usuario.nombre,*/
                                email: usuario.email,
                                apellido: usuario.apellido,
                                género: usuario.género,
                                direccion:usuario.direccion ,
                                codigopostal:usuario.codigopostal ,
                                ciudad: usuario.ciudad,
                                imagen: usuario.imagen,
                                rol: usuario.rol
                            }/**/
                            if (req.cookies.TecnoLife) {
                                res.cookie('TecnoLife', '', { maxAge: -1 })
                                res.cookie('TecnoLife', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })

                            }
                            req.session.save( (err) => {
                                req.session.reload((err) => {
                                    return res.redirect('/users/perfil')
                
                                });
                             });
                        }).catch(errores => res.send(errores))
                        /* return res.redirect('/profile');*/
                    }).catch(errores => res.send(errores))
                })

                .catch(errores => res.send(errores))
        }
        else {
            db.Usuarios.findOne({
                where: {
                    id: req.params.id
                }
            })
                .then(user => {
                    if (req.file) {
                        /**/
                        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', dato))

                        if (ruta(req.file.filename) && (req.file.filename !== "default-image.png")) {
                            fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', req.file.filename))
                        }
                    }
                    return res.render('/register', {
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
                .catch(errores => res.send(errores))
        }
    },/**/
    perfil: (req, res) => {
        return res.render('perfil')
    }
}









/**/


