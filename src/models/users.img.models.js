const {DataTypes} = require('sequelize')

const {database} = require('../utils/dataBase')

const UsersImg = database.define('users_image', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        field: 'user_id'
    }
})


module.exports = UsersImg