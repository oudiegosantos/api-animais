const express = require("express");
const router = express.Router();
const {cadastrarUsuario} = require("../controllers/authControllers");

router.post("/auth", cadastrarUsuario);

module.exports = router;