const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

module.exports = server => {
    const Token = server.models.Token;
    const User = server.models.User;

    return (req, res, next) => {
        let user;

        User.findOne()
            .where({
                username: req.body.username,
                password: sha1(req.body.password)
            })
            .then(u => user = u || Promise.reject({ code: 404, message: 'user not found' }))
            .then(ensureLimitNotExceeded)
            .then(encrypt)
            .then(encryptedToken => res.send(encryptedToken))
            .catch(error => res.status(error.code || 500).send(error.message || error));


        function ensureLimitNotExceeded() {
            return Token
                .find()
                .where({ user: user.id })
                .sort('created_at')
                .then(ensureCountNotExceeded)
                .then(create);

            function ensureCountNotExceeded(tokens) {
                if (tokens.length < server.settings.simultaneousLoginLimit)
                    return true;

                return Token.findByIdAndRemove(tokens[0].id);
            }

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
};