var express = require("express"); // importa
var router = express.Router(); // registra os caminhos de 'armazenamento do servidor' 

var usuarioController = require("../controllers/usuarioController"); // importa arquivo que fica na pasta controles, nesse arquivo que salvamos e verificamos o login

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router; // exporta para ser usado no servidor principal 