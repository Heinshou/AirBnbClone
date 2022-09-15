const Accommodations = require('../models/accommodations.models')
const Places = require('../models/places.models')
const Users = require('../models/user.model')
const uuid = require('uuid')

const getAllAccommodations = async () => {
    const data = await Accommodations.findAll({
        include: [{
            model: Places,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }, {
            model: Users,
            as: 'user',
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
            }
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
        }
    })
    // const data = await Users.findAll({
    //     include: {
    //         model: Accommodations,
    //         include: {
    //             model: Places,
    //             attributes: {
    //                 exclude: ['createdAt', 'updatedAt']
    //             }
    //         },
    //         attributes: {
    //             exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
    //         }
    //     },
    //     attributes: {
    //         exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
    //     }
    // })
    return data
}


const getAccommodationById = async (id) => {
    const data = await Accommodations.findOne({
        where: {
            id,
        },
        include: [{
            model: Places,
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        }, {
            model: Users,
            as: 'user',
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"],
            },
        }
        ],
        attributes: {
            exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
        },
    });
    return data;
};


const createAccommodation = async(data,userId,placeId) => {
    const {isActive,score, ...restOfData} = data
    const newAccommodation = await Accommodations.create({
        ...restOfData,
        id: uuid.v4(),
        hostId: userId,
        placeId: placeId,
    })
    return newAccommodation
}

const updateAccommodations = async(data,idac) => {
    const {placeId,id,score,hostId, ...restOfData} = data
    const response = await Accommodations.update(restOfData,
    {
        where: {
            id: idac
        }
    })

    return response
}

const deleteAccommodation = async(id) => {
    const data = await Accommodations.destroy({
        where: {
            id: id
        }
    })
    return data
}



module.exports = {
    getAllAccommodations,
    getAccommodationById,
    createAccommodation,
    updateAccommodations,
    deleteAccommodation
}