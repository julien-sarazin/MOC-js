module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        const data = req.body;
        data.owner = req.user;

        return Car.create(data)
            .then(appendCarToOwner)
            .then(car => res.status(201).send(car))
            .catch(err => res.status(err.code || 500).send(err.message || err));

        function appendCarToOwner(car) {
            return server.controllers.users
                .appendCar(car)
                .then(() => car);
        }
    }
};