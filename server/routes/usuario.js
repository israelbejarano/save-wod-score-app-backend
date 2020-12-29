const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const Atleta = require('../models/atleta');

const app = express();
// rutas
app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    let atleta = new Atleta({
        email: body.email
    });

    let usuario = new Usuario({
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        atleta: atleta
    });


    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        atleta.save((err, atletaDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                usuario: usuarioDB,
                // atleta: atletaDB no hace falta porque el usuario devuelve el atleta entero
            });
        });
        /* res.json({
            ok: true,
            usuario: usuarioDB
        }); */
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

module.exports = app