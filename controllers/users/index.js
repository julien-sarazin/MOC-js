module.exports = server => {
    return {
        show: require('./show')(server),
        list: require('./list')(server),
        create: require('./create')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        appendCar: require('./appendCar')(server)
    };
};