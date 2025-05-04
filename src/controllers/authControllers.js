const auth = require("../models/auth");

exports.cadastrarUsuario = async(req, res) => {

    try {

        const novoUsuario = new
        auth(req.body);
        await novoUsuario.save();
        res.status(201).json({message: "usuário cadastrado com sucesso!"});

    } catch (error) {
        if(error.code === 11000) {
            res.status(400).json({message: "Nome do usuário já existe!", error});
        } else {
            res.status(500).json({message: "Erro ao cadastrar usuário!", error});
    }
        }

        
};