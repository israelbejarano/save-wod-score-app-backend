const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let atletaSchema = new Schema({
    nombre: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
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

atletaSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });


module.exports = mongoose.model('Atleta', atletaSchema);