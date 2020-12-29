const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    email: {
        type: String,
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
        required: false,
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

module.exports = mongoose.model('Usuario', usuarioSchema);