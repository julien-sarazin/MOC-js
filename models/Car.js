const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = Schema({
    model: {
        type: String,
        required: true,
        default: 'Lambda'
    },
    color: {
        type: String,
        required: true,
        default: 'White'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;