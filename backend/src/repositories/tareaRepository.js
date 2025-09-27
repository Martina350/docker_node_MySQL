const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas(userId) {
    return await prisma.tarea.findMany({
        where: { usuarioId: userId }
    });
}

async function deleteTarea(id) {
    return await prisma.tarea.delete({
        where: { id: id }
    });
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