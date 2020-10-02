// Import Candidate model
Candidate = require('../model/candidateModel');

// Handle index actions
exports.index = function (req, res) {
    Candidate.get(function (err, candidates){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Candidate Added Successfully",
            data: candidates
        });
    });
};

// Handle create actions
exports.new = function (req, res) {
    var candidate = new Candidate();
    candidate.name = req.body.name;
    candidate.number = req.body.number;
    candidate.image = req.body.image;
    candidate.description.short = req.body.shortDescription;
    candidate.description.mission = req.body.missionDescription;
    candidate.description.vision = req.body.visionDescription;

    // Save and validate
    candidate.save(function (err) {
        if (err)
            res.json(err);
    res.json({
        message: "New Candidate Created!",
        data: candidate
        });
    });
};

// Handle view actions
exports.view = function (req, res) {
    Candidate.findById(req.params.id, function (err, candidate) {
        if (err)
            res.send(err);
        res.json({
            message: "candidates Details Loading...",
            data: candidate
        });
    });
};

// Handle update actions
exports.update = function (req, res) {
    Candidate.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {
            name: req.body.name,
            nim: req.body.nim,
            email: req.body.email
        }})
    .then((candidate)=>{
        if(candidate) {
            res.json({
                message: "candidate updated",
                data: candidate
            });
        } else {
            res.json({
                message: "candidates not found",
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
    Candidate.remove({
            _id: req.params.id
        }, function (err, candidate) {
            if (err)
                res.send(err);
        res.json({
            status: "success",
            message: "Candidate Deleted!"
        });
    });
};