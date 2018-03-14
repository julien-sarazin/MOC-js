module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.findById(req.params.id)
            .then(user => res.send(user))
            .catch(error => res.status(500).send(error))
    }
};


