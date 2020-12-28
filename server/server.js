require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

// crear el servidor express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// rutas
app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    res.json({
        body
    });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: ' + process.env.PORT);
});