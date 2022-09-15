const {DataTypes} = require('sequelize')


const {database} = require('../utils/dataBase')
const Users = require('./user.model')
const Accommodations = require('./accommodations.models')

const Reservations = database.define('reservations', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull:false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    arrival: {
        type: DataTypes.DATE,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATE,
        allowNull: false
    },
    accommodationId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Accommodations,
            key: 'id'
        }
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    kids: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    babys: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    pets: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    score:{
        type: DataTypes.DECIMAL,
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        field: 'is_finished',
        defaultValue: false
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        field: 'is_canceled',
        defaultValue: false
    }
})



module.exports = Reservations