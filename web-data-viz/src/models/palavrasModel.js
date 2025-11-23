var database = require("../database/config");

function listar() {

    var instrucao = `
        select count(idPartidas) AS total_partidas from partida;;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_partidas() {

    var instrucao = `
        select count(qtd_partidas) AS total_quantidade from registros_totais;;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(palavras_encontradas) {

    var instrucao = `
        INSERT INTO partida (palavras_encontradas) VALUES ('${palavras_encontradas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cad_partidas(qtd_partidas) {

    var instrucao = `
        INSERT INTO registros_totais (qtd_partidas) VALUES ('${qtd_partidas}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

module.exports = {
    cadastrar,
    listar,
    listar_partidas,
    cad_partidas
};
