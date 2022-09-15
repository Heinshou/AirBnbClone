const router = require('express').Router()
const passport = require('passport')

const { roleAdmindMiddleware } = require('../middleware/adminRole')
const { upload } = require('../utils/multer')
require('../middleware/auth.middleware')(passport)

const userServices = require('./users.http')





router.route('/') //* /api/v1/users/
    .get(userServices.getAll)
    



router.route('/me',)
    .put(passport.authenticate('jwt',{session: false}),userServices.editMyUser)
    .delete(passport.authenticate('jwt',{session: false}), userServices.deleteMyUser)
    .get(passport.authenticate('jwt',{session: false}),userServices.getMyUser)

router.route('/me/profile-img')
    .post(passport.authenticate('jwt', {session:false}), upload.single('profile_img'), userServices.postProfileImg)

router.route('/:id') //*
    .get(passport.authenticate('jwt', {session: false}), userServices.getById)
    .put(passport.authenticate('jwt', {session: false}),roleAdmindMiddleware,userServices.edit)
    .delete(passport.authenticate('jwt', {session: false}),roleAdmindMiddleware,userServices.remove)

router.route('/:id/role')
    .get(userServices.getUserWithRol)

    
exports.router = router 