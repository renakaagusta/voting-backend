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
        required: true
    },
    voting: {
        id_candidate: {
            type: String,
        },
        time: {
            type: Date,
        },
        counted: {
            type: Number,
        } 
    },
    session: {
        min: {
            type: Date,
        },
        max: {
            type: Date,
        }
    }
});

var Participant = module.exports = mongoose.model('participant', participantSchema);

module.exports.get = function (callback, limit) {
    Participant.find(callback).limit(limit);
}