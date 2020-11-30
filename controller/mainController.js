Setting = require('../model/settingModel');
Participant = require('../model/participantModel');
Candidate = require('../model/candidateModel');
Session = require('../model/sessionModel');

var ip = ['36.81.8.39'];

// Handle login actions
exports.login = function (req, res) {
    if(!ip.includes(req.ip.replace(('"::ffff:', '')))){
        console.log(req.ip.replace(('"::ffff:', '')));
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
    if(!ip.includes(req.ip.replace('::ffff:', ''))){
        console.log(JSON.stringify(req.ip).replace('::ffff:', ''));

        return res.status(500).send();
    }
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