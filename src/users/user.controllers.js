const uuid = require('uuid')
const crypt = require('../utils/crypt.js')
const Users = require('../models/user.model')
const Roles = require('../models/roles.model.js')


const userDB = [{
    "id": "c38c070f-4512-4065-bf1c-8b0d09cd4571",
    "first_name": "alejandro",
    "last_name": "sanchez",
    "email": "gabriel@gmail.com",
    "password": "$2b$10$Ab55gIlT3Lm3xA2kVRczCOYujRTny2SziPkQW.r083xu3j.tlgXmm",
    "phone": "123",
    "birthday_date": "16/08/2002",
    "rol": "admind",
    "profile_image": "",
    "country": "colombia",
    "is_active": true,
    "verified": false
}, {
    "id": "e91a4d77-664d-4ce5-8b81-78f90856bfd5",
    "first_name": "pibe",
    "last_name": "valderrama",
    "email": "valderrama@gmail.com",
    "password": "$2b$10$s0hOZfda/gLCXNS/EveTcuo42W3fLvwYBFTvoTrJjfgnZTHzKOYTm",
    "phone": "3146036737",
    "birthday_date": "16/08/1965",
    "rol": "normal",
    "profile_image": "g334dg",
    "country": "colombia",
    "is_active": true,
    "verified": false
}]



const getAllUsers = async () => {
    const data = await Users.findAll({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt', 'role_id']
        }
    })

    return data;
}


const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt', 'role_id']
        }
    })
    return data

    //? select * from users where id = ${id};
}

const createUser = async (data) => {

    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        password: crypt.hashPassword(data.password),
        phone: data.phone,
        birthdayDate: data.birthdayDate,
        dni: data.dni,
        roleId: "e8a2ad1a-b06f-409f-bd20-0ca1c37d0915",
        address: data.address,
        profileImage: data.profileImage,
        status: "active",
        verified: false,
        createdAt: data.created_at,
        updatedAt: data.updated_at
    })
    return newUser
};


const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const editUser = async (userId, data, userRol) => {
    const { password, id, verified, role_id, ...resOfProperties } = data
    if (userRol === 'c3a2a366-5d3b-4f22-9667-290012e2a190') {
        const response = await Users.update(
            ...resOfProperties,
            role_id, {
            where: {
                id: userId
            }
        })
        return response
    } else {

        const response = await Users.update(
            resOfProperties, {
            where: {
                id: userId
            }
        })
        return response
    }

}


const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            email:email
        },
        attributes: {
            exclude: [ 'createdAt', 'updatedAt', 'role_id']
        }
    })
    return data
}


const editProfileImg = async (userId, imgUrl) => {
    const response = await Users.update({
        profileImg: imgUrl

    }, {
        where: {
            id: userId
        },
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt', 'role_id']
        }
    })
    return response
}

const getUserWithRol = async (userId) => {
    const data = await Users.findOne({
        where: {
            id: userId
        },
        include: {
            model: Roles,
            as: "role",
            attributes: {
                exclude: ["id", "createdAt", "updatedAt"],
            },
        },
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
        }
    })
    return data;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    getUserByEmail,
    editProfileImg,
    getUserWithRol
}