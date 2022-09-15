const Role = require('../models/roles.model')

const roleAdmindMiddleware = (req, res, next) => {
    Role.findOne({
        where: {
            name: "admind"
        }
    }).then((response) => {
        const rol = req.user.rol

        if (rol === response.id) {
            next()
        } else {
            res.status(401).json({ status: 'error', message: 'User not authorized to make this request' })
        }
    }).catch(() => {
        res.status(401).json({ status: 'error', message: 'User not authorized to make this request' })
    })
}

const roleHostMiddleware = (req, res, next) => {
    Role.findOne({
        where: {
            name: "host"
        }
    }).then((response) => {
        const rol = req.user.rol
        

        if (rol === response.id) {
            next()
        } else {
            res.status(401).json({ status: 'error', message: 'User not authorized to make this request' })
        }
    }).catch(() => {
        res.status(401).json({ status: 'error', message: 'User not authorized to make this request' })
    })
}


module.exports = {
    roleAdmindMiddleware,
    roleHostMiddleware
} 