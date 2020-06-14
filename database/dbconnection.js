const mongoose = require('mongoose');

mongoose.connect(connect(process.env.DB_URL, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;