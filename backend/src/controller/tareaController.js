const { use } = require('react');
const tareaService = require('../services/tareaService');

async function getTareas(req, res) {
    try {
        const userId = req.user.id; // Asegúrate de que el middleware de autenticación establece req.user
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
        const tarea = await tareaService.deleteTarea(parseInt(req.params.id));
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
        const tarea = await tareaService.createTarea(req.body);
        res.status(201).json({ message: "Tarea created successfully", data: tarea });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}