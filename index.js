const express = require('express'); 
const moment = require('moment-timezone');
const app = express(); 
const port = 9000; 

app.get('/hora/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad; 
    const hora = moment().tz(ciudad).format('HH:mm:ss'); 
    res.send(`La hora en ${ciudad} es ${hora}`);
});

app.get('/hora/', (req, res) => {
    const ciudades = ['America/Bogota', 'Europe/London']; 
    const horas = ciudades.map(ciudad => {
        const hora = moment().tz(ciudad).format('HH:mm:ss');
        return `La hora en ${ciudad} es ${hora}`;
    });
    res.send(horas.join('\n')); 
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});