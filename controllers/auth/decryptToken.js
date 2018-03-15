const jwt = require('jsonwebtoken');

module.exports = server => {
    const Token = server.models.Token;

    return (encryptedToken) => {
        if (!encryptedToken)
            return Promise.reject({ code: 401, message: 'unauthorized' });

        return decrypt()
            .then(ensureExists);

        function decrypt() {
            return new Promise((resolve, reject) => {
                jwt.verify(encryptedToken, server.settings.secret, (err, decryptedToken) => err ? reject(err) : resolve(decryptedToken))
            });
        }

        function ensureExists(decryptedToken) {
            return Token.findById(decryptedToken)
                .populate('user')
                .then(token => token ? token.user : Promise.reject(new Error('not Found')))
        }
    }
};
