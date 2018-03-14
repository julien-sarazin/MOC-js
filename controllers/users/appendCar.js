module.exports = server => {
    const User = server.models.User;

    return (car) => {
        return User.findById(car.owner)
            .then(user => {
                user.cars = user.cars.concat(car.id);
                return user.save();
            });
    }
};


