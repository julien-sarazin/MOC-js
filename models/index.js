const mongoose = require('mongoose');

module.exports = server => {
    // 1. connect to the database
    mongoose.connect('mongodb://localhost:27017/foocar');

    server.models = {
        Car: require('./Car'),
        User: require('./User')
    }
};