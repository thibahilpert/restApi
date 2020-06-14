const userModel = require('../models/user/userModel');

const userVerification = async (req, res, next) => {
    const { email } = req.body;
    if( await userModel.findOne( { email } ) ){
        return res.status(400).send( { error: 'User already exists, try another email' } );
    }else{
<<<<<<< HEAD
        userModel.password = undefined;
=======
>>>>>>> 1c7bcf3d6cd7bf38b39177a42be73714233d85ae
        next();
    }
}

module.exports.userVerification = userVerification;