var express = require('express');
var router = express.Router();

// Initialize express router
router = require('express').Router();

// Import authentication controller
var authenticationController = require('../controller/authenticationController');

// authentication routes
router.route('/login')
.post(authenticationController.login)

module.exports = router;
