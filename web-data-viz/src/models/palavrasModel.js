var database = require("../database/config");

function listar() {
    
      var instrucao = `
        select count(idPartidas) AS total_partidas from partida;;
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

module.exports = {
    cadastrar,
    listar
};
