module.exports = server => {
    const User = server.models.User;

    return (car) => {
        return User.findByIdAndUpdate(car.owner, {
            $pull: {
                cars: car.id
            }
        })
    }
};