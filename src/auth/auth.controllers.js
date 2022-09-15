const userControllers = require('../users/user.controllers.js')
const { comparePassword } = require('../utils/crypt')

const loginUser = async (email, password) => {

    try {
        const user = await userControllers.getUserByEmail(email)
       
        const verify_password =  comparePassword(password, user.password);
        
        if (verify_password) {
            return user;
        }
        return false;
        //return verify_password ? user : false
    } catch (error) {
        return false
    }
}


module.exports = {
    loginUser
}
