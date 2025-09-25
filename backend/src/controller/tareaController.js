const tareaService = require('../services/tareaService');

async function getTareas(req, res) {
    try {
        const tareas = await tareaService.getTareas();
        console.log(tareas);
        res.status(200).json({message: "Tareas retrieved successfully", data: tareas} );
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getTareas
};