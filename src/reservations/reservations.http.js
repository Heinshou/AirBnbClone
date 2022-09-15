const reservationsControllers = require('./reservations.controllers')


const postReservation = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const accomodationId = req.params.id

    reservationsControllers.createReservation(data, userId, accomodationId)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ status: 400, message: err.message })
        })
}

const getAll = (req, res) => {
    reservationsControllers.getAllReservations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getById = (req, res) => {
    const id = req.params.id

    reservationsControllers.getReservationById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const updated = (req, res) => {
    const data = req.body
    const id = req.params.id

    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: "Missing Data" });
    } else if (
        !data.arrival ||
        !data.departure ||
        !data.adults
    ) {
        return res.status(400).json({
            message: "All fiels must be completed Example:",
            fields: {
                "arrival": "16-08-2002",
                "departure": "20-08-2002",
                "adults": 5
            },
        });
    } else {
        reservationsControllers.updateReservation(data, id)
            .then(response => {
                res.status(200).json({
                    message: "Reservation edited succesfuly",
                    accommodation: response
                })
            })
            .catch(err => {
                res.status(400).json({ status: 400, message: err.message })
            })
    }

}

const deleteReservation = (req, res) => {
    const id = req.params.id

    reservationsControllers.deleteReservation(id)
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
    postReservation,
    getAll,
    getById,
    updated,
    deleteReservation
}