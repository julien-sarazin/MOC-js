const sha1 = require('sha1');

module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        const data = req.body;
        data.password = sha1(req.body.password);

        User.create(data)
            .then(user => res.status(201).send(user))
            .catch(error => res.status(500).send(error))
    }
};