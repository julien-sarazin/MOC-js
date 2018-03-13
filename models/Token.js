const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const TokenModel = mongoose.model('Token', TokenSchema);

module.exports = TokenModel;