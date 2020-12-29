const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio.']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio.']
    },
    activo: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false,
    },
    premium: {
        type: Boolean,
        default: false
    },
    atleta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Atleta'
    } // de tipo atletaSchema esto a lo mejor no hace falta
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);