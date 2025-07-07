const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// RESTful Routes
router.get('/', mainController.getHomePage);
router.get('/about', mainController.getAboutPage);

module.exports = router;