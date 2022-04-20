const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
 nome: { type: String, required: true },
 sobrenome: { type: String, required: true },
 cpf: { type: String, required: true, unique: true },
 senha: String,
});
module.exports = mongoose.model("Usuario", UsuarioSchema);