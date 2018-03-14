const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;