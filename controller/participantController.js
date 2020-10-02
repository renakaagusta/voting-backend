// Import Participant model
Participant = require('../model/participantModel');

// Handle index actions
exports.index = function (req, res) {
    Participant.get(function (err, participants){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Participant Added Successfully",
            data: participants
        });
    });
};

// Handle create actions
exports.new = function (req, res) {

    var participant = new Participant();
    participant.name = req.body.name;
    participant.nim = req.body.nim;
    participant.email = req.body.email;

    // Save and validate
    participant.save(function (err) {
        if (err)
            res.json(err);
    res.json({
        message: "New Participant Created!",
        data: participant
        });
    });
};

// Handle view actions
exports.view = function (req, res) {
    Participant.findById(req.params.id, function (err, participant) {
        if (err)
            res.send(err);
        res.json({
            message: "participants Details Loading...",
            data: participant
        });
    });
};

// Handle update actions
exports.update = function (req, res) {
    Participant.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {
            name: req.body.name,
            nim: req.body.nim,
            email: req.body.email
        }})
    .then((participant)=>{
        if(participant) {
            res.json({
                message: "participant updated",
                data: participant
            });
        } else {
            res.json({
                message: "participants not found",
                data: {}
            });
        }
    })
    .catch((err)=>{
        res.json({
            message: "error",
            data: err
        })
    })
};

// Handle delete actions
exports.delete = function (req, res) { 
    Participant.remove({
            _id: req.params.id
        }, function (err, participant) {
            if (err)
                res.send(err);
        res.json({
            status: "success",
            message: "Participant Deleted!"
        });
    });
};