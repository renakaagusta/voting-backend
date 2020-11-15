var express = require('express');
var router = express.Router();

// Initialize express router
router = require('express').Router();

// Import participant controller
var participantController = require('../controller/participantController');

// participant routes
router.route('/')
.post(participantController.new)

router.route('/all')
.get(participantController.index)

router.route('/vote')
.put(participantController.vote)

route.route('/force-delete/:id')
.delete(participantController.force_delete);

router.route('/:id')
.get(participantController.view)
.post(participantController.new)
.patch(participantController.update)
.put(participantController.update)
.delete(participantController.delete);

module.exports = router;
