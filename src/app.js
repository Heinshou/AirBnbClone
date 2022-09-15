//* Dependencias
const express = require('express')
require("dotenv").config()
const passport = require('passport')
const path = require('path')
const swaggweUi = require('swagger-ui-express')
require('./middleware/auth.middleware')(passport)



//* Archivos de Rutas

const userRouter = require('./users/users.router.js').router
const authRouter = require('./auth/auth.router.js').router
const reservationRouter = require('./reservations/reservations.router').router 
const accommodationRouter = require('./accommodations/accommodations.router').router

const Accommodations = require('./models/accommodations.models')
const swaggerDoc = require('./swagger.json')
const initModels = require('./models/initModels')
const defaultData = require('./utils/generateData')

//* Configuraciones Iniciales

const { database } = require('./utils/dataBase.js')

const app = express()

initModels()

database.authenticate()
    .then(() => console.log("Database Authenticated"))
    .catch(err => console.log(err))


if (process.env.NODE_ENV === 'production') {
    database.sync()
        .then(() => {
            console.log('Database synced')

            defaultData()
        })
        .catch(err => console.log(err))
} else {
    database.sync({ force: true })
        .then(() => {
            console.log('Database synced')
            defaultData()
        })
        .catch(err => console.log(err))
}



app.use(express.json())

app.get("/", async (req, res) => {

    try {
        const data = await Accommodations.create({
            id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
            title: "premium - vistas 360 ciudad (alberca y gym)",
            description: "asd",
            guests: 6,
            rooms: 3,
            beds: 3,
            bathrooms: 4.5,
            price: 1536.00,
            hostId: 'c38c070f-4512-4065-bf1c-8b0d09cd4571',
            score: 0.00,
            placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
            commision: 150.00
        })
        res.status(200).json({ message: "All ok!", data });

    } catch (error) {
        res.status(400).json(error)
    }

    //res.status(200).json({ message: "All ok!" });
}); 



app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/accommodations', accommodationRouter)
app.use('/api/v1/reservations', reservationRouter)
app.use('/v1/doc', swaggweUi.serve, swaggweUi.setup(swaggerDoc))

app.get('/api/v1/uploads/:imgName', (req, res) => {
    const imgName = req.params.imgName;
    res.status(200).sendFile(path.resolve('uploads/') + '/' + `${imgName}`)
})


app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})


exports.default = app