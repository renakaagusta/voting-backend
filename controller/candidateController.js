// Import Candidate model
Candidate = require('../model/candidateModel');

var multer = require('multer');
var path = require('path');

var id = ""
var image = "image url";

const storage = multer.diskStorage({
    destination : path.join(__dirname + './../../voting-frontend/public/images/'),
    filename: function(req, file, cb){
        cb(null, id + path.extname(file.originalname));
        image  = id + path.extname(file.originalname);
    }
});

const upload = multer({
    storage : storage
}).single('image');

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
    candidate.image = path.join(__dirname + './../../voting-frontend/public/images/avatar.jpg');
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
    id = req.params.id
    upload(req, res, err => {
        if (err) throw err
        Candidate.findOneAndUpdate(
            {_id: id},
            {$set: {
                name: req.body.name,
                number: req.body.number,
                image: image,
                'description.short': req.body.shortDescription,
                'description.vision': req.body.visionDescription,
                'description.mission': req.body.missionDescription
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
    }); 
};

// Handle vote actions
exports.vote = function (req, res) {
    Candidate.findById (req.body.id, function(err, candidate) {
        if(err) throw err;
        candidate.total_vote++;
        Candidate.findOneAndUpdate(
            {_id: candidate._id},
            {$set: candidate}
        )
        .then((candidate)=>{
            if(candidate) {
                res.json({
                    message: "candidate voted",
                    data: candidate
                });
            } else {
                res.json({
                    message: "candidate not found",
                    data: {}
                });
            }
        })
    })
}

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