const { DataTypes } = require('sequelize')

const { database } = require('../utils/dataBase')

const Users = require('./user.model')
const Places = require('./places.models') 

const Accommodations = database.define('accommodations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    guests: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    rooms: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    beds: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    bathrooms: {
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    hostId: {
        allowNull: false,
        type: DataTypes.UUID, 
        field: "userId",
        references:{
            model: Users,
            key: 'id'
        }
    },
    score: {
        type: DataTypes.FLOAT
    },
    placeId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
            model: Places,
            key: 'id'
        }
    },
    commision: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: "is_active",
    },
})


module.exports = Accommodations