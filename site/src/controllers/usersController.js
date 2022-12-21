/* const{validationResult}= require ('express-validator') */
module.exports = {
    login: (req,res) => {
        return res.render('login')
    },
    /* processLogin:(req,res)=>{
        let errors = validationResult(req)
        if (errrs.isEmpty()) {
            return res.send(req.boby)
        }else{
           return res.render('/login',{
            errors:errors.mapped(),
            old:req.boby
           })
        } 
    },*/
    register: (req,res) => {
        return res.render('register')
    },
    /* processRegister:(req,res)=>{
        let errors = validationResult (req)
        if (req.fileValidationError) {
            let imagen = {
                param:'imagen',
                msg:'',
            }
            errors.errors.push(imagen)
            
        }
        if (errors.isEmpty()) {
            return res.send(req.boby)
        }else{
           return res.render('/register',{
            errors:errors.mapped(),
            old:req.boby
           })
        }
    }, */
    profile: (req,res) => {
        return res.render('profile')
    }
}
