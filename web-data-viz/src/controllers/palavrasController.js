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
    var acertos_totais = req.body.acertos_totais;

    if (acertos_totais == undefined) {
        res.status(400).send("Seu acertos_totais está undefined!");
    }

    palavrasModel.cadastrar(acertos_totais).then(function(resposta){
        res.status(200).send("enviado");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}