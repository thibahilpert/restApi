const userModel = require('../models/user/userModel');

const userVerification = async (req, res, next) => {
    const { email } = req.body;
    if( await userModel.findOne( { email } ) ){
        return res.status(400).send( { error: 'User already exists, try another email' } );
    }else{
        userModel.password = undefined;
        next();
    }
}

module.exports.userVerification = userVerification;