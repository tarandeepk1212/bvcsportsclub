// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// Define endpoint for registration
router.post('/', registrationController.calculateFee);

module.exports = router;
