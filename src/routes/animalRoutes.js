const express = require("express");
const router = express.Router();
const {cadastrarAnimal, listarAnimal, removerAnimais} = require("../controllers/animalControllers");

router.post("/animais", cadastrarAnimal);
router.get("/animais", listarAnimal);
router.delete("/animais", removerAnimais);   

module.exports = router;