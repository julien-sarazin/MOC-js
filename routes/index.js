module.exports = server => {
    require('./users')(server);
    require('./cars')(server);
};