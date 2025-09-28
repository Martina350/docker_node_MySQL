require('dotenv').config();
const express = require('express'); 
const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;
const tareaRoutes = require('./routes/tareaRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const path = require('path');
const { apiReference } = require('@scalar/express-api-reference')

const corsOption = {
    origin: 'http://localhost:5000' || process.env.CORS_ORIGIN,
    credentials: true,
}

app.use(express.json());
console.log("secret password: ",jwtSecret)
console.log("port: ",port)

app.get('/', (req, res) => {
    res.send('API backend is running...');
});

app.use('/api',tareaRoutes) /// /api/tareas
app.use('/api', authRoutes);

app.use('/docs', apiReference({
    theme: 'dark',
    layout: 'modern',
    spec: {
        url: '/api/openapi.yaml',
    },
    configuration: {
        showSidebar: true,
        hideDownloadButton: false,
        hideTryItPanel: false,
        authentication: {
            preferredSecurityScheme: "bearerAuth",
            apikey: {
                token: 'token'
            }
        }
    }
}));

app.get('/api/openapi.yaml', (req, res) => {
    res.setHeader('Content-Type', 'application/x-yaml');
    res.sendFile(path.join(__dirname, '../docs/openapi.yaml'));
});
    

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`API documentation available at http://localhost:${port}/docs`);
});