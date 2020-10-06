var mongoose = require('mongoose');

// Setup schema
var participantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requird: true
    },
    voting: {
        number: {
            type: String,
        },
        time: {
            type: Date
        }
    },
});

var Participant = module.exports = mongoose.model('participant', participantSchema);

module.exports.get = function (callback, limit) {
    Participant.find(callback).limit(limit);
}