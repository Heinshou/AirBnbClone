const Accommodation_images = require("../models/accommodation.img.models");
const Accommodations = require("../models/accommodations.models")
const Places = require("../models/places.models");
const Reservations = require("../models/reservations.models");
const Users = require("../models/user.model");
const Users_images = require("../models/users.img.models");
const Roles = require("../models/roles.model");

const generateData = async() => {
await Roles.bulkCreate([
    {
        name: "guest", 
        id:'e8a2ad1a-b06f-409f-bd20-0ca1c37d0915'
    },
    {
        name: "host", 
        id: '8fa576bf-ca04-495f-a8d6-cd41af43ae1f'
    }, 
    {
        name: "admind",
        id: 'c3a2a366-5d3b-4f22-9667-290012e2a190'
    }], {validate: true})

await Users.create(
    {
        id: "c38c070f-4512-4065-bf1c-8b0d09cd4571",
        firstName: "alejandro",
        lastName: "sanchez",
        gender: 'masculino',
        addres: 'ytryt',
        email: "gabriel@gmail.com",
        password: "$2b$10$lPiF8cdpUGbWK72WC/5DgOCpahssMaBUalLjvRAe0UcbObJgdvjPm",
        phone: "1234567890",
        birthdayDate: "1999-08-16",
        roleId: "c3a2a366-5d3b-4f22-9667-290012e2a190",
        profileImage: "hoal.com",
        dni: 'gfgfgf',
        status: true,
        verified: false
    }
)

await Places.bulkCreate([
    {
      id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '3436a556-6623-40ba-88b8-2e01009f9d82',
      city: 'Suba',
      state: 'Bogotá',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '134a55b6-487c-46cc-a5b5-9392af20c205',
      city: 'Medellín',
      state: 'Antioquia',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '3a230417-80ae-4232-a8ff-6fd50068a777',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'México',
      continent: 'America'
    },
    {
      id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
      city: 'Monterrey',
      state: 'Muevo León',
      country: 'México',
      continent: 'America'
    },
  ])
// await Accommodations.create({
//   id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
//   title: "premium - vistas 360 ciudad (alberca y gym)",
//   description: "asd",
//   guests: 6,
//   rooms: 3,
//   beds: 3,
//   bathrooms: 4.5,
//   price: 1536.00,
//   hostId : 'c38c070f-4512-4065-bf1c-8b0d09cd4571',
//   score: 0.00,
//   placesId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
//   commision: 150.00
// })
}

module.exports = generateData