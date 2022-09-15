const uuid = require('uuid')
const Reservations = require('../models/reservations.models')
const Users = require('../models/user.model')
const Accommodations = require('../models/accommodations.models')

const getAllReservations = async() => {
    const data = await Reservations.findAll({
        include: [
            {
                model: Accommodations,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
                }
            },{
                model: Users,
                as: 'user',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
                }
            }
            
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const createReservation = async(data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const newReservation = await Reservations.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservation
}

const getReservationById = async(id)=> {
    const data = await Reservations.findOne({
        where: {
            id: id
        },
        include: [{
            model: Users,
            attributes: {
                exclude: ["createdAt", "updatedAt", "password",'roleId'],
            }
        },{
            model: Accommodations,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
            }
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const updateReservation = async(data, idUser) => {
    const {userId,id,score,accommodationId, ...restOfData} = data
    const response = await Reservations.update(restOfData,
    {
        where: {
            id: idUser
        }
    })

    return response
}

const deleteReservation = async (id) => {
    const data = await Reservations.destroy({
        where: {
            id:id
        }
    })

    return data
}


module.exports = {
    createReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation
}