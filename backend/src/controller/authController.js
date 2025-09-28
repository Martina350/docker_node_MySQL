const authService = require('../services/authService');
const blacklistRepository = require('../repositories/tokenBlacklistRepository');


async function register(req, res) {
    console.log('Register request body:', req.body);
    
    try {

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is required' });
        }

        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', data: user });
    }
    catch (error) {
        console.error('Register error:', error.message);
        res.status(400).json({ message: error.message });
    }
}

async function loginUser(req, res) {
    console.log('Login request body:', req.body);
    
    try {

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is required' });
        }

        const token = await authService.loginUser(req.body);
        res.json({ message: 'Login successful', token });
    }
    catch (error) {
        console.error('Login error:', error.message);
        res.status(400).json({ message: error.message });
    }
}

async function logoutUser(req, res) {

    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token modify provided' });

    await blacklistRepository.addTokenRevocado(token);

    res.json({ message: 'Logout successful' });
}

module.exports = {
    loginUser,
    logoutUser,
    register
};