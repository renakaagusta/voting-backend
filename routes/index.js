var express = require('express');
var router = express.Router();

// Initialize express router
router = require('express').Router();

// Import participant controller
var participantController = require('../controller/participantController');

// participant routes
router.route('/participants')
.get(participantController.index)
.post(participantController.new);

router.route('/participants/:participant_id')
.get(participantController.view)
.patch(participantController.update)
.put(participantController.update)
.delete(participantController.delete);

module.exports = router;
