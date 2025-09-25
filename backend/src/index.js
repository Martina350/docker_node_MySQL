require('dotenv').config();
const express = require('express'); 
const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;
const tareaRoutes = require('./routes/tareaRoutes');


app.use(express.json());
console.log("secret password: ",jwtSecret)
console.log("port: ",port)

app.get('/', (req, res) => {
    res.send('API backend is running...');
});

app.use('/api',tareaRoutes) /// /api/tareas

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});