const { DataTypes } = require('sequelize')

const { database } = require('../utils/dataBase')


const Places = database.define('places', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    state: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    continent: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
    },
})


module.exports = Places