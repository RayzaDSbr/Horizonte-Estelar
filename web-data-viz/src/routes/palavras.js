var express = require("express");
var router = express.Router();

var palavrasController = require("../controllers/palavrasController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    palavrasController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    palavrasController.listar(req, res);
});
router.get("/listar_partidas", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    palavrasController.listar_partidas(req, res);
});
router.post("/cad_partidas", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    palavrasController.cad_partidas(req, res);
});

module.exports = router;