Setting = require('../model/settingModel');
Participant = require('../model/participantModel');
Candidate = require('../model/candidateModel');
Session = require('../model/sessionModel');

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
    "182.0.198.123",
    "36.65.160.63",
    "182.2.40.27",
    "36.74.208.155",
  ];
// Handle login actions
exports.login = function (req, res) {
    if(!ip.includes(req.ip.replace('::ffff:', ''))){
        console.log(req.ip.replace('::ffff:', ''));

        return res.status(500).send();
    }
    Setting.find({
        'authentication.username':req.body.username,
        'authentication.password':req.body.password
    }, function(err, authentication) {
        if(err)
            throw err;
        if(authentication.length!=0) {
            res.json({
                message:'success', 
                data: authentication,
            })
        } else {
            res.json({
                message:'failed',
            })
        }
    })
};

// Handle announcement actions
exports.announcement = function (req, res) {
    Setting.find({}, function(err, announcement) {
        if(err)
            throw err;
        res.json({
            data:announcement[0].announcement
        })
    })
};


// Handle resume actions
exports.outline = function (req, res) {
    var outline = {
        participant: 0,
        participantVoted: 0,
        candidate: 0,
        session: 0,
    }
    
    Participant.find({},function(err, participants){
        if(participants.length!=0) {
            outline.participant = participants.length;
            participants.forEach(function(participant){
                if(participant.voting.time!=null)
                    outline.participantVoted++;
            })
            Candidate.find({}, function(err, candidates) {
                if(candidates.length!=0)
                    outline.candidate = candidates.length;
                Session.find({}, function(err, sessions) {
                    if(sessions.length!=0)
                        outline.session = sessions.length;
                    
                    res.json({
                        data: outline
                    })
                })
            })
        }
    })
};