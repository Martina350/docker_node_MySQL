function authorizedRoles(...allowedRoles) {
    return (req, res, next) => {
        const user = req.user; // Cambiar de req.usuario a req.user
        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        if (!allowedRoles.includes(user.rol)) return res.status(403).json({ message: 'Forbidden' }); // Cambiar user.role a user.rol
        next();  
    }
}

module.exports = {
    authorizedRoles
};