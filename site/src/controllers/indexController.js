let db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    home: (req, res) => {
    //    let aside = db.Asides.findAll()
         db.Productos.findAll({
            include: [{all: true}]
        })
    
            .then(productos => {
                /* res.send(productos) */
                return res.render('home',
                    {
                        productos
                })
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