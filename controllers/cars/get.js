module.exports = server => {
    const Car = server.models.Car;

    return (criteria) => {
        return Car
            .findOne()
            .where(criteria)
            .then(results => {
                if (!results || results.length === 0)
                    return Promise.reject({code: 404, message: 'car.not.found'});

                return results;
            });
    }
};


