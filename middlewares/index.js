module.exports = server => {
    require('./logger')(server);

    server.middlewares = {
        bodyParser: require('body-parser'),
        ensureAuthenticated: require('./ensureAuthenticated')(server),
    }
};