const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas(userId) {
    return await prisma.tarea.findMany({
        where: { usuarioId: userId }
    });
}

async function deleteTarea(id, userId, userRole = 'usuario') {
    const tareaId = parseInt(id);

    if (isNaN(tareaId)) {
        throw new Error('Invalid tarea ID');
    }

    // Si es admin, puede eliminar cualquier tarea
    if (userRole === 'admin') {
        // Verificar que la tarea existe
        const tareaExistente = await prisma.tarea.findFirst({
            where: { id: tareaId }
        });

        if (!tareaExistente) {
            throw new Error('Tarea not found');
        }
    } else {
        // Si no es admin, solo puede eliminar sus propias tareas
        const tareaExistente = await prisma.tarea.findFirst({
            where: {
                id: tareaId,
                usuarioId: userId
            }
        });

        if (!tareaExistente) {
            throw new Error('Tarea not found or you do not have permission to delete it');
        }
    }

    // Eliminar la tarea
    const tareaEliminada = await prisma.tarea.delete({
        where: {
            id: tareaId
        }
    });

    return tareaEliminada;
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