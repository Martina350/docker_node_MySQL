const express = require('express');
const router = express.Router();
const {verifyToken} = require('../services/authService');
const tareaController = require('../controller/tareaController');   

router.get('/tareas', verifyToken, tareaController.getTareas);

module.exports = router;
  /// /api/tareas
