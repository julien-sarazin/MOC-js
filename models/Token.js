const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TimestampPlugin = require('mongoose-timestamp');

const TokenSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

TokenSchema.plugin(TimestampPlugin);

const TokenModel = mongoose.model('Token', TokenSchema);

module.exports = TokenModel;