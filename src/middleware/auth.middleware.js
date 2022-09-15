const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;


const Users = require('../models/user.model')
const { getUserById } = require('../users/user.controllers')

module.exports = (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: process.env.SECRET
    };
    passport.use(
        new JwtStrategy(opts, async (decoded, done) => {
            try {
                const response = await getUserById(decoded.id);
                if (!response) 
                return done(null, false);
                console.log("decoded jwt", decoded);
                return done(null, decoded);
            } catch (error) {
                done(error.message);
            }
        })
    );
};