module.exports = server => {
    const Trip = server.models.Trip;

    return (criteria) => {
        criteria.status = Trip.Statuses.NotStarted;
        return Trip
            .remove(criteria)
    }
};

