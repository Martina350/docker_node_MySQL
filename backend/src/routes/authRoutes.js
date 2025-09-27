const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const verifyToken = require('../services/authService');


router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);


module.exports = router;