let db = require('../database/models')
const { Op } = require("sequelize");
const imagenes = ["samsung.jpg"]

module.exports = {
    home: (req, res) => {
    //    let aside = db.Asides.findAll()

        let marcas = db.Marcas.findAll()
        
        let ofertasNotebooks = db.Productos.findAll({
            where: {
                categorias_id : 2
            },
            include: [
                {all : true} 
            ]
        })

        let smarts =  db.Productos.findAll({
            where: {
                categorias_id : 5
            },
            include: [
                {all : true} 
            ]
        })

        let ofertasCelulares = db.Productos.findAll({
            where: {
                categorias_id : 1
            },
            include: [
                {all : true} 
            ]
        })
         
        Promise.all([marcas, ofertasNotebooks, smarts, ofertasCelulares])
        .then(([marcas, ofertasNotebooks, smarts,ofertasCelulares]) => {
            marcas = marcas.map((marca, index) => {
                let elemento = {
                    id : marca.id,
                    nombre : marca.nombre,
                    imagen : index + 1 <= imagenes.length ? imagenes[index] : "imagenPorDefecto.jpg"
                }
                return elemento
            })
/*             return res.send(marcas) */
            return res.render("home", {
                marcas,
                ofertasNotebooks,
                smarts,
                ofertasCelulares
            })

        })
        .catch(error => res.send(error))
      
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
    },
    preguntasFrecuentes:(req,res) =>{
        res.render("preguntasFrecuentes")
    },
    sobreNosotros:(req,res) =>{
        res.render("sobreNosotros")
    },
    terminosYcondiciones:(req,res) =>{
        res.render("terminosyCondiciones")
    },
    trabajaConNosotros:(req,res) =>{
        res.render("trabajaConNosotros")
    },
    politicaYprivacidad:(req,res) =>{
        res.render("politicaYprivacidad")
    },
    contacto:(req,res) =>{
        res.render("contacto")
    }
}