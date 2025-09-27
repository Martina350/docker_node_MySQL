const tareaRepository = require('../repositories/tareaRepository');

async function getTareas(userId) {
    return await tareaRepository.getTareas(userId);
}

async function deleteTarea(id, userId, userRole) {
    return await tareaRepository.deleteTarea(id, userId, userRole);
}

async function createTarea(data, userId) {
    return await tareaRepository.createTarea(data, userId);
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea 
};