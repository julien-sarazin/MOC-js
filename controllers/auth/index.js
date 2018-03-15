module.exports = server => {
    return {
        login: require('./login')(server),
        decryptToken: require('./decryptToken')(server)
    };
};