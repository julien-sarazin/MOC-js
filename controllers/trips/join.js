module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        return Trip
            .findOne()
            .where({
                _id: req.params.id,
                status: Trip.Statuses.NotStarted
            })
            .populate('car')
            .then(trip => trip || Promise.reject({code: 404, message: 'trip.not.found'}))
            .then(ensureRoomAvailable)
            .then(join)
            .then(trip => res.send(trip))
            .catch(err => res.status(err.code || 500).send(err.message || err));


        function ensureRoomAvailable(trip) {
            const roomAvailable = trip.car.seats - trip.participants.length - 1;
            if (roomAvailable <= 0)
                return Promise.reject({code: 422, message: 'no.room.available'});

            return trip;
        }

        function join(trip) {
            trip.participants = trip.participants.concat(req.user);
            return trip.save();
        }
    }
};