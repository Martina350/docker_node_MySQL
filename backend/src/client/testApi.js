const axios = require('axios');

async function testGetTareas() {
    try {
        const response = await axios.get('http://localhost:5000/api/tareas');
        console.log("response", response.data);
    } catch (error) {
        console.error("error getting tareas", error);
    }
}

testGetTareas();