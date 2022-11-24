module.exports = (req,res,next) => {
    if (req.session.userLogin) {
        if (req.session.userLogin.rol === 'admin') {
            return next()
        }
    }
    res.redirect('/')
}