const {DataTypes} = require('sequelize')


const {database} = require('../utils/dataBase')


const Roles = database.define('roles', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Roles