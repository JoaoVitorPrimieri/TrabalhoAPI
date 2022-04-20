const mongoose = require("mongoose");

const AgendamentoSchema = new mongoose.Schema({
 descricao: { type: String, required: true, unique: true },
 data: { type: Date, required: true },
 status: { type: String, required: true },
 usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    require: true,
    },
maquina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maquina',
        require: true,
        }
   
});
module.exports = mongoose.model("Agendamento", AgendamentoSchema);