var palavrasModel = require("../models/palavrasModel");

function listar(req, res) {
    palavrasModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var palavras_encontradas = req.body.palavras_encontradas;

    if (palavras_encontradas == undefined) {
        res.status(400).send("Seu palavras_encontradas está undefined!");
    }

    palavrasModel.cadastrar(palavras_encontradas).then(function(resposta){
        res.status(200).send("enviado");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}