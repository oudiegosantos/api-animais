const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    nome: String,
    idade: String,
    raca: String,
    porte: String,
    descricao: String
});

module.exports = mongoose.model("Animal", animalSchema);