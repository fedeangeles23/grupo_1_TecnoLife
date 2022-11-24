module.exports = {
    login: (req,res) => {
        return res.render('login')
    },
    register: (req,res) => {
        return res.render('register')
    },
    profile: (req,res) => {
        return res.render('profile')
    }
}
