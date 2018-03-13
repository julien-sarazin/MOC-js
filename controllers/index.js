module.exports = server => {
    server.controllers = {
        users: require('./users')(server),
        cars: require('./cars')(server)
    }
};