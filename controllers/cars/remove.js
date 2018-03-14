module.exports = server => {
    const Car = server.models.Car;
    const UserController = server.controllers.users;

    return (req, res, next) => {
        Car.findByIdAndRemove(req.params.id)
            .then(pullFromOwner)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).send(error));

        function pullFromOwner(car) {
            return UserController
                .pullCar(car)
        }
    }
};


