module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        Trip.find()
            .then(trips => res.send(trips))
            .catch(error => res.status(500).send(error))
    }
};


