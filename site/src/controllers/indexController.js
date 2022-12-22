let db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    home: (req, res) => {
    //    let aside = db.Asides.findAll()
        /* let marcas = db.Marcas.findAll() */

        /* let ofertasNotebooks = db.Categories.findAll() */
        /* let ofertasNotebooks = db.Productos.findAll({
            where: {
                categorias_id : 1
            },
            include[
                {all: true}
            ]
            Promise.all([marcas, ofertasNotebooks, smarts]).then(([marcar, ofertasNotebooks, smarts]) => {
                return res.send(marcas)
                return res.send(ofertasNotebooks)
                return res.render("home", {
                    marcas,
                    ofertasNotebooks
                })
            }
            let smarts = db.Productos.findAll({
            where: {
                categorias_id : 4
            },
            include[
                {all: true}
            ]
        }
        }) */



         db.Categorias.findAll({
            include: [{all: true}]
        })
    
            .then(productos => {
                /* res.send(productos) */
/*                 return res.render('home',
                    {
                        productos
                }) */
            })
            .catch(error => res.send(error))
    },
    home2 :(req, res)=> {
        res.render('home')




    },
    prueba: (req, res) =>{
        db.Productos.findAll({
            include: ['category', 'marca', 'imagenes']
        })
        .then(productos=>{
       res.send(productos)     
        })
        .catch(error =>res.send(error))

    },
    search: (req, res) => {
        let elemento = req.query.search

        db.Productos.findAll({
            where : {
                [Op.or] : [
                    {nombre : {[Op.substring] : elemento}},
                    {descripcion : {[Op.substring] : elemento}}
                ]
            }
        })

        return res.render('busqueda',
            {
                busqueda: elemento,
                resultados
            });
    },
    categories:(req, res)=>{


        console.log();
    }
}