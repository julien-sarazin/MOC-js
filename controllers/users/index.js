const sha1 = require('sha1');

module.exports = server => {
    const User = server.models.User;

    return {
        list,
        create,
        update,
        remove
    };

    function list(req, res, next) {
        User.find()
            .then(users => res.send(users))
            .catch(error => res.status(500).send(error))
    }

    function create(req, res, next) {
        const data = req.body;
        data.password = sha1(req.body.password);

        User.create(data)
            .then(user => res.status(201).send(user))
            .catch(error => res.status(500).send(error))
    }

    function update(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.status(204).send())
            .catch(error => res.status(500).send(error))
    }

    function remove(req, res, next) {
        User.findByIdAndRemove(req.params.id)
            .then(data => res.status(204).send())
            .catch(error => res.status(500).send(error))
    }
};