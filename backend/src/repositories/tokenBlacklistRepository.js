const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function addTokenRevocado(token) {
    return await prisma.tokenRevocado.create({
        data: { token }
    });
}

async function isTokenRevocado(token) {
    const register = await prisma.tokenRevocado.findUnique({
        where: { token }
    });
    return !!register;
}

module.exports = {
    addTokenRevocado,
    isTokenRevocado
};