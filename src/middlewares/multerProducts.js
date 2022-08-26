const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null,'./public/img')
    },
    filename: (req,file,cb) => {
        return cb(null,'img-' + Date.now() + path.extname(file.extname))        
    }
})

const upload = multer({
    storage
})

module.exports = upload