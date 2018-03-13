module.exports = server => {
    server.middlewares = {
        bodyParser: require('body-parser'),
        ensureAuthenticated: require('./ensureAuthenticated')(server)
    }
};