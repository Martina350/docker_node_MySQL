const authService = require('../services/authService');
const { registerUser } = require('../services/authService');

async function register(req, res) {
console.log(req.body);    
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', data: user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function loginUser(req, res) {
    try{
        const token = await authService.loginUser(req.body);
        res.json({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    loginUser,
    registerUser
};