const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

module.exports = server => {
    const Token = server.models.Token;
    const User = server.models.User;

    return {
        login,
        logout
    };

    function login(req, res, next) {
        let user;

        User.findOne()
            .where({
                username: req.body.username,
                password: sha1(req.body.password)
            })
            .then(u => user = u || Promise.reject({code: 404, message: 'user not found'}))
            .then(ensureTokenHasNotBeenSet)
            .then(encrypt)
            .then(encryptedToken => res.send(encryptedToken))
            .catch(error => res.status(error.code || 500).send(error.message || error));


        function ensureTokenHasNotBeenSet() {
            return Token
                .findOneAndRemove({ user: user.id })
                .then(create);

            function create() {
                return Token.create({ user: user.id })
            }
        }

        function encrypt(token) {
            return new Promise((resolve, reject) => {
                jwt.sign(token.id, server.settings.secret, (err, encryptedToken) => err ? reject(err) : resolve(encryptedToken))
            })
        }
    }

    function logout() {

    }
};