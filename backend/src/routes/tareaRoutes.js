const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/authMiddleware');
const tareaController = require('../controller/tareaController');   
const { authorizedRoles } = require('../middleware/rolMiddleware');

router.get('/tareas', verifyToken, tareaController.getTareas);

router.post('/tareas', verifyToken, tareaController.createTarea);

router.delete('/tareas/:id', verifyToken, authorizedRoles('admin'), tareaController.deleteTarea);

module.exports = router;
  /// /api/tareas
