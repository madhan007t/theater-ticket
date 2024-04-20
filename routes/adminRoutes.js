
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminControllers');

router.post('/login', adminController.login);

module.exports = router;
