const authService = require('../services/authService');

async function register(req, res) {
    console.log('Register request body:', req.body);
    
    try {
        // Validar que el cuerpo de la petición no esté vacío
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
        // Validar que el cuerpo de la petición no esté vacío
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

module.exports = {
    loginUser,
    register
};