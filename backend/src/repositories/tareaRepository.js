const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas() {
    return await prisma.tarea.findMany();
}

async function deleteTarea(id) {
    return await prisma.tarea.delete({
        where: { userId: userId }
    });
}

async function createTarea(data, userId) {
    return await prisma.tarea.create({...data, userId});
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
};