const userModel = require('./userModel');

const userVerification = (req, res, next) => {
    const { email } = req.body;
    if( await userModel.findOne( { email } ) ){
        
    }
}

module.exports = userVerification;