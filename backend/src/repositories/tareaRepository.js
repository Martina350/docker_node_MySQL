const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas() {
    return await prisma.tarea.findMany();
}

module.exports = {
    getTareas
};