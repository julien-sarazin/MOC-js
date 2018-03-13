const mongoose = require('mongoose');

module.exports = server => {
    // 1. connect to the database
    mongoose.connect(server.settings.db_uri);

    server.models = {
        Car: require('./Car'),
        User: require('./User')
    }
};