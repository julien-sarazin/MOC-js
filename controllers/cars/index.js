module.exports = server => {
    const Car = server.models.Car;

    return {
        show,
        list,
        create,
        update,
        remove
    };

    function show(req, res, next) {
        Car.findById(req.params.id)
            .then(car => res.send(car))
            .catch(error => res.status(500).send(error))
    }

    function list(req, res, next) {
        Car.find()
            .then(cars => res.send(cars))
            .catch(error => res.status(500).send(error))
    }

    function create(req, res, next) {
        const data = req.body;
        data.owner = req.user;

        return Car.create(data)
            .then(car => res.status(201).send(car))
            .catch(err => res.status(err.code || 500).send(err.message || err));

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