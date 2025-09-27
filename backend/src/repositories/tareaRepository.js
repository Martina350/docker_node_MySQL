const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas(userId) {
    return await prisma.tarea.findMany({
        where: { usuarioId: userId }
    });
}

async function deleteTarea(id, userId) {
    const tareaId = parseInt(id);

    if (isNaN(tareaId)) {
        throw new Error('Invalid tarea ID');
    }
    
}

async function createTarea(data, userId) {
    return await prisma.tarea.create({
        data: {
            ...data,
            usuarioId: userId
        }
    });
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};