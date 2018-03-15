module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.find()
            .then(cars => res.send(cars))
            .catch(error => res.status(500).send(error))
    }
};


