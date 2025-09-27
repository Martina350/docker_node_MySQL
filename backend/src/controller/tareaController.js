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
        const userId = req.user.userId; // Obtener el userId del token decodificado
        const tareaId = parseInt(req.params.id);
        const tarea = await tareaService.deleteTarea(tareaId, userId);
        res.status(200).json({message: "Tarea deleted successfully", data: tarea} );
    }
    catch (error) {
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