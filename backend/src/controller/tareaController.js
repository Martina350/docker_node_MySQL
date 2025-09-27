const tareaService = require('../services/tareaService');

async function getTareas(req, res) {
    try {
        const userId = req.user.userId; // Obtener el userId del token decodificado
        const tareas = await tareaService.getTareas(userId);
        console.log(tareas);
        res.status(200).json({message: "Tareas retrieved successfully", data: tareas} );
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteTarea(req, res) {
    try {
        console.log('=== DELETE TAREA DEBUG ===');
        console.log('req.params:', req.params);
        console.log('req.query:', req.query);
        console.log('req.user:', req.user);
        
        const userId = req.user.userId; // Obtener el userId del token decodificado
        const userRole = req.user.rol; // Obtener el rol del token decodificado
        const tareaId = parseInt(req.params.id);
        
        console.log('userId:', userId);
        console.log('userRole:', userRole);
        console.log('tareaId:', tareaId);
        console.log('tareaId isNaN:', isNaN(tareaId));
        
        const tarea = await tareaService.deleteTarea(tareaId, userId, userRole);
        res.status(200).json({message: "Tarea deleted successfully", data: tarea} );
    }
    catch (error) {
        console.log('Error in deleteTarea:', error.message);
        res.status(500).json({ message: error.message });
    }
    
}


module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};

async function createTarea(req, res) {
    try {
        const userId = req.user.userId; // Obtener el userId del token decodificado
        const tarea = await tareaService.createTarea(req.body, userId);
        res.status(201).json({ message: "Tarea created successfully", data: tarea });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}