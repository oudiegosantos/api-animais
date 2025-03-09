const animal = require("../models/animal");
const mongoose = require("mongoose");

// cadastrar animais

exports.cadastrarAnimal = async (req, res) => {
    try {
        const novoAnimal = new 
        animal(req.body);
        await novoAnimal.save();
        res.status(201).json(novoAnimal);
    } catch (error) {
        res.status(500).json({message: "Erro ao cadastrar animal"})
    }
};

// buscar todos os animais 

exports.listarAnimal = async (req, res) => {
    try {

        const animais = await animal.find()
        res.status(200).json(animais);
    } catch (error) {
        res.status(500).json({message: "erro ao buscar animais!"});
    }
};

// buscar animal por id 

exports.obterAnimalPorId = async (req, res) => {
    console.log("obterAnimalPorId chamado")
    try {
        const id = req.params.id;
        console.log("ID recebido:", id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido!" });
        }

        let objectId;
        try {
            objectId = new mongoose.Types.ObjectId(id);
        } catch (error) {
            return res.status(400).json({ message: "ID inválido!", error: error.message });
        }

        console.log("ID convertido:", objectId);

        const animalEncontrado = await animal.findById(objectId);

        if (!animalEncontrado) {
            return res.status(404).json({ message: "Animal não encontrado!" });
        }

        return res.status(200).json(animalEncontrado);
    } catch (error) {
        console.error("Erro ao buscar animal:", error);
        return res.status(500).json({ message: "Erro ao buscar animal", error: error.message });
    }
};