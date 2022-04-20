const mongoose = require("mongoose");

const MaquinaSchema = new mongoose.Schema({
 modelo: { type: String, required: true },
 marca: { type: String, required: true },
 tipoCombustivel: { type: String, required: true},
 numeroChassi: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Maquina", MaquinaSchema);