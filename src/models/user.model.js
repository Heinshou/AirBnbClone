const { DataTypes } = require("sequelize")


const { database } = require('../utils/dataBase')

/*

"first_name": "alejandro",
    "last_name": "sanchez",
    "email": "gabriel@gmail.com",
    "password": "$2b$10$Ab55gIlT3Lm3xA2kVRczCOYujRTny2SziPkQW.r083xu3j.tlgXmm",
    "phone": "",
    "birthday_date": "DD/MM/YYYY",
    "rol": "admind",
    "profile_image": "",
    "country": "string",
    "is_active": true,
    "verified": false

*/
const Users = database.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "first_name",
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "last_name",
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    birthdayDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: "birthday_date",
    },
    dni: {
        type: DataTypes.STRING,
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    address: {
        type: DataTypes.STRING,
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        },
        field: "profile_image",
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "active", //active, non-active, deleted, suspended
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
    },

})


module.exports = Users