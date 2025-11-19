var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM registros_totais;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(acertos_totais) {
    var instrucao = `
        INSERT INTO registros_totais (acertos_totais) VALUES ('${acertos_totais}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};
