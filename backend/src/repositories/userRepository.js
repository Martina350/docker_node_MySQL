const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(data) {
    return await prisma.usuario.create({ data });
}

async function getUserByEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } });
}

module.exports = {
    createUser,
    getUserByEmail
};