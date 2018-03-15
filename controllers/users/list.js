module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.find()
            .then(users => res.send(users))
            .catch(error => res.status(500).send(error))
    }
};


