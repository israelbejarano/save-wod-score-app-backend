const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let atletaSchema = new Schema({
    nombre: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio']
    }, // viene del usuario
    img: {
        type: String,
        required: false
    },
    altura: {
        type: Number,
        required: false
    },
    peso: {
        type: Number,
        required: false
    },
    fNacimiento: {
        type: Date,
        required: false
    },
    sexo: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model('Atleta', atletaSchema);