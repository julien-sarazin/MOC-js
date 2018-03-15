module.exports = server => {
    return {
        show: require('./show')(server),
        list: require('./list')(server),
        create: require('./create')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        join: require('./join')(server),
        start: require('./start')(server),
        finish: require('./finish')(server),
        clean: require('./clean')(server)
    };
};