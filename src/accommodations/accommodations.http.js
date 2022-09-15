const { response } = require('express')
const AccommodationControllers = require('./accommodations.controllers')



const getAll = (req, res) => {
    AccommodationControllers
        .getAllAccommodations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accommodationControllers.getAccommodationById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const create = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const placeId = req.params.placeId

    if (!data) {
        return res.status(400).json({ message: "Missing Data" });
    } else if (
        !data.title ||
        !data.description ||
        !data.guests ||
        !data.rooms ||
        !data.beds ||
        !data.bathrooms ||
        !data.price ||
        !data.commision
    ) {
        return res.status(400).json({
            message: "All fiels must be completed Example:",
            fields: {
                "title": "casa de campo Buenaventura",
                "description": "rootkfdgkfhgkdfhghfgkhfghhgkhgkdfhg",
                "guests": 5,
                "rooms": 4, "beds": 5,
                "bathrooms": 4.5,
                "price": 3000,
                "commision": 4.5
            },
        });
    } else {
        AccommodationControllers.createAccommodation(data, userId, placeId)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ status: 400, message: err.message })
            })
    }
};


const updated = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: "Missing Data" });
    } else if (
        !data.title ||
        !data.description ||
        !data.guests ||
        !data.rooms ||
        !data.beds ||
        !data.bathrooms ||
        !data.price ||
        !data.commision
    ) {
        return res.status(400).json({
            message: "All fiels must be completed Example:",
            fields: {
                "title": "casa de campo Buenaventura",
                "description": "rootkfdgkfhgkdfhghfgkhfghhgkhgkdfhg",
                "guests": 5,
                "rooms": 4, "beds": 5,
                "bathrooms": 4.5,
                "price": 3000,
                "commision": 4.5
            },
        });
    } else {
        AccommodationControllers.updateAccommodations(data, id)
            .then(response => {
                res.status(200).json({
                    message: "Accommodation edited succesfuly",
                    accommodation: response
                })
            })
            .catch(err => {
                res.status(400).json({ status: 400, message: err.message })
            })
    }



}


const deleteAccommodation = (req, res) => {
    const id = req.params.id
    AccommodationControllers.deleteAccommodation(id)
        .then((response) => {
            if (response) {
                return res.status(204).json();
            } else {
                return res.status(400).json({ message: "Invalid id" });
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))

}

module.exports = {
    getAll,
    getById,
    create,
    updated,
    deleteAccommodation
}