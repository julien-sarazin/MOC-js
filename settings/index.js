module.exports = server => {
    server.settings = require('./settings.json')

    server.settings.port = process.env.PORT || server.settings.PORT
    server.settings.db_uri = process.env.MONGODB_URI || server.settings.db_uri
};