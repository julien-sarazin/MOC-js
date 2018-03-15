module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        Trip.findById(req.params.id)
            .then(ensureNotStarted)
            .then(remove)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).send(error));


        function ensureNotStarted(trip) {
            if (trip && trip.status === Trip.Statuses.NotStarted)
                return true;

            return Promise.reject({code: 422, message: 'unprocessable.trip'})
        }

        function remove() {
            return Trip.findByIdAndRemove(req.params.id);
        }
    }
};


