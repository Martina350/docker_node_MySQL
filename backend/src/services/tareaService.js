const tareaRepository = require('../repositories/tareaRepository');

async function getTareas(userId) {
    return await tareaRepository.getTareas(userId);
}

async function deleteTarea(id) {
    return await tareaRepository.deleteTarea(id);
}

async function createTarea(data, userId) {
    return await tareaRepository.createTarea(data, userId);
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea 
};