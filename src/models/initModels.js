const Users = require('./user.model')
const Roles = require('./roles.model')
const UsersImg = require('./users.img.models')
const Reservations = require('./reservations.models')
const Accommodations = require('./accommodations.models')
const AccommodationsImage = require('./accommodation.img.models')
const Places = require('./places.models')


const initModels = () => {
    Roles.hasMany(Users)
    Users.belongsTo(Roles)

    UsersImg.belongsTo(Users)
    Users.hasMany(UsersImg)
    
    // Users.belongsToMany(Accommodations, {through:Reservations})
    // Accommodations.belongsToMany(Users, {through: Reservations})
    
    Users.hasMany(Reservations)
    Reservations.belongsTo(Users)

    Accommodations.hasMany(Reservations)
    Reservations.belongsTo(Accommodations)

    Accommodations.belongsTo(Places)
    Places.hasMany(Accommodations)

    Accommodations.hasMany(AccommodationsImage)
    AccommodationsImage.belongsTo(Accommodations)
    

    Users.hasMany(Accommodations)
    Accommodations.belongsTo(Users)
    
    


    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
}


module.exports = initModels