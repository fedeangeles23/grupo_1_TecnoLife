module.exports = (req,res,next) => {
    if (req.session.userLogin) {
 /* if (req.session.userLogin.rol === 'admin') {*/
 if ((+req.session.userLogin.rol) === 1) {
            return next()
        }
    }
    res.redirect('/')
}