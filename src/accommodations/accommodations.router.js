const router = require('express').Router()
const passport = require('passport')

const AccommodationServices = require('./accommodations.http')
const reservationsServices = require('../reservations/reservations.http')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(AccommodationServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),AccommodationServices.getById)
    .put(passport.authenticate('jwt', {session: false}),AccommodationServices.updated)
    .delete(passport.authenticate('jwt', {session: false}),AccommodationServices.deleteAccommodation)

router.route('/:placeId/make-accommodation')
    .post(passport.authenticate('jwt', {session: false}),AccommodationServices.create)

router.route('/:id/make-reservation')
    .post(passport.authenticate('jwt', {session: false}),reservationsServices.postReservation)

exports.router = router

