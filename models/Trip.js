const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TimestampPlugin = require('mongoose-timestamp');

const TripSchema = Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

TripSchema.plugin(TimestampPlugin);

const Trip = mongoose.model('Trip', TripSchema);
Trip.Statuses = {
    NotStarted: 0,
    Started: 1,
    Finished: 2
};

module.exports = Trip;