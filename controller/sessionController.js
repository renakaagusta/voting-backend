// Import Session model
Session = require('../model/sessionModel');
Participant = require('../model/participantModel');

var ip = [
    "36.81.8.39",
    "115.178.245.1",
    "120.188.87.161",
    "182.2.70.49",
    "36.82.16.96",
    "182.1.113.100",
    "36.72.212.123",
    "180.242.214.231",
    "182.2.41.152",
    "182.0.198.123"
  ];

// Handle index actions
exports.index = function (req, res) {
    Session.get(function (err, sessions){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Session Added Successfully",
            data: sessions
        });
    });
};

// Handle create actions
exports.new = function (req, res) {
    if(!ip.includes(req.ip.replace('::ffff:', ''))){
        console.log(req.ip.replace('::ffff:', ''));

        return res.status(500).send();
    }
    var session = new Session();
    session.number = req.body.number;
    session.start = new Date(req.body.start);
    session.end = new Date(req.body.end);

    // Save and validate
    session.save(function (err) {
        if (err)
            res.json(err);
    res.json({
        message: "New Session Created!",
        data: session
        });
    });
};

// Handle view actions
exports.view = function (req, res) {
    
    Session.findById(req.params.id, function (err, session) {
        if (err)
            res.send(err);
        res.json({
            message: "sessions Detail Loading...",
            data: session
        });
    });
};

// Handle update actions
exports.update = function (req, res) {
    if(!ip.includes(req.ip.replace('::ffff:', ''))){
        console.log(req.ip.replace('::ffff:', ''));

        return res.status(500).send();
    }
    Session.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        }})
    .then((session)=>{
        if(session) {
            Participant.updateMany({
                    'session.number': session.number,
                }, 
                {
                    '$set': {                    
                        'session.min': new Date(req.body.start),
                        'session.max': new Date(req.body.end)
                    }
                },
                function(err, participants) {
                    if(err) throw err

                    console.log(JSON.stringify(participants))

                    res.json({
                        message: "session updated",
                        data: session
                    });
            })
        } else {
            res.json({
                message: "session not found",
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
    if(!ip.includes(req.ip.replace('::ffff:', ''))){
        console.log(req.ip.replace('::ffff:', ''));

        return res.status(500).send();
    }
    Session.remove({
            _id: req.params.id
        }, function (err, session) {
            if (err)
                res.send(err);
        res.json({
            status: "success",
            message: "Session Deleted!"
        });
    });
};