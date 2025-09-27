const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const saltRounds = 10;
async function registerUser(data) {
    // Validar que los datos requeridos estén presentes
    if (!data.email || !data.password) {
        throw new Error('Email and password are required');
    }

    const userExists = await userRepository.getUserByEmail(data.email);
    if (userExists) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const user = await userRepository.createUser({
        email: data.email,
        password: hashedPassword,
        rol: 'usuario'
    });
    return user;
}


const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const secret_key = jwtSecret;

async function loginUser(data) {
    // Validar que los datos requeridos estén presentes
    if (!data.email || !data.password) {
        throw new Error('Email and password are required');
    }

    const user = await userRepository.getUserByEmail(data.email);
    if (!user) throw new Error('Invalid email or password');

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) throw new Error('Invalid email or password');
    const payload = { userId: user.id, email: user.email, rol: user.rol };
    //sign token
    const token = jwt.sign(payload, secret_key, { expiresIn: '1h' });
    return  token;
}

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = {
    verifyToken,
    loginUser,
    registerUser
};
