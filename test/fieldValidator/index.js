module.exports = server => {
    return {
        hasProperties: require('./hasProperties')(server),
        whitelist: require('./whitelist')(server),
        blacklist: require('./blacklist')(server)
    };
};
