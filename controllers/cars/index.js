module.exports = server => {
    const Car = server.models.Car;

    return {
        list,
        create,
        update,
        remove
    };

    function list(req, res, next) {
        Car.find()
            .then(cars => res.send(cars))
            .catch(error => res.status(500).send(error))
    }

    function create(req, res, next) {
        Car.create(req.body)
            .then(car => res.status(201).send(car))
            .catch(error => res.status(500).send(error))
    }

    function update(req, res, next) {
        Car.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.status(204).send())
            .catch(error => res.status(500).send(error))
    }

    function remove(req, res, next) {
        Car.findByIdAndRemove(req.params.id)
            .then(data => res.status(204).send())
            .catch(error => res.status(500).send(error))
    }
};