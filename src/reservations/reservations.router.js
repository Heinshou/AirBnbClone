const router = require('express').Router()
const passport = require('passport')
const reservationsServices = require('./reservations.http')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(reservationsServices.getAll)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),reservationsServices.getById)
    .put(passport.authenticate('jwt', {session: false}),reservationsServices.updated)
    .delete(passport.authenticate('jwt', {session: false}),reservationsServices.deleteReservation)

exports.router = router