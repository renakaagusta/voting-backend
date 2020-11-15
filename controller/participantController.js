// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

// Handle index actions
exports.index = function (req, res) {
  Participant.get(function (err, participants) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  var participant = new Participant();
  participant.name = req.body.name;
  participant.nim = req.body.nim;
  participant.email = req.body.email;
  participant.session.id = req.body.sessionId;
  participant.session.number = req.body.sessionNumber;
  participant.session.min = new Date(req.body.sessionMin);
  participant.session.max = new Date(req.body.sessionMax);

  // Save and validate
  participant.save(function (err) {
    if (err) res.json(err);

    Session.findById(req.body.sessionId, function (err, session) {
      if (err) throw err;
      session.total_participant++;
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
          } else {
          }
        }
      );
    });

    res.json({
      message: "New Participant Created!",
      data: participant,
    });
  });
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) res.send(err);
    res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate": req.body.id_candidate,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle delete actions
exports.delete = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) res.send(err);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
