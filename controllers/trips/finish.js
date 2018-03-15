module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        return Trip.findOne()
            .where({
                _id: req.params.id,
                driver: req.user.id,
                status: Trip.Statuses.Started
            })
            .then(trip => trip || Promise.reject({code: 404, message: 'trip.not.found'}))
            .then(finish)
            .then(trip => res.send(trip))
            .catch(err => res.status(err.code || 500).send(err.message || err));

        function finish(trip) {
            trip.status = Trip.Statuses.Finished;
            return trip.save();
        }
    }
};