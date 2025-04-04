"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_ts_1 = require("./Pessoa.ts");
var Conta_ts_1 = require("./Conta.ts");
function main() {
    try {
        var pessoa1 = new Pessoa_ts_1.Pessoa("João", 25);
        var conta1 = new Conta_ts_1.Corrente(pessoa1, 1000, 500);
        conta1.depositar(500);
        conta1.sacar(200);
        conta1.exibirDados();
        console.log("");
        var pessoa2 = new Pessoa_ts_1.Pessoa("Maria", 30);
        var conta2 = new Conta_ts_1.Poupanca(pessoa2, 2000, 5);
        conta2.aplicarRendimentos();
        conta2.exibirDados();
    }
    catch (error) {
        console.error(error.message);
    }
}
main();
