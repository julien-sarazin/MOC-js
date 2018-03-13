module.exports = server => {
    return (req, res, next) => {
        const encryptedToken = req.header('authorization');
        server.controllers.auth
            .decryptToken(encryptedToken)
            .then(user => req.user = user)
            .then(() => next())
            .catch(() => res.status(401).send('unauthorized'))
    }
};