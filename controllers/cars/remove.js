module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.findByIdAndRemove(req.params.id)
            .then(pullFromOwner)
            .then(removeNotStartedTrips)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).send(error));

        function pullFromOwner(car) {
            return server.controllers.users
                .pullCar(car)
        }

        function removeNotStartedTrips() {
            return server.controllers.trips
                .clean({car: req.params.id })
        }
    }
};


