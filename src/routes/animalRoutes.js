const express = require("express");
const router = express.Router();
const {cadastrarAnimal, listarAnimal, obterAnimalPorId, removerAnimal} = require("../controllers/animalControllers");

router.post("/animais", cadastrarAnimal);
router.get("/animais", listarAnimal);
router.get("/animais/:id", obterAnimalPorId)
router.delete("/animais/:id", removerAnimal);

module.exports = router;