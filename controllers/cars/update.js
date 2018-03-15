module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.findByIdAndUpdate(req.params.id, req.body)
            .then(car => res.send(car))
            .catch(error => res.status(500).send(error))
    }
};


