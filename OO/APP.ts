import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";

function main(): void {
    try {
        const pessoa1 = new Pessoa("João", 25);
        const conta1 = new Corrente(pessoa1, 1000, 500);
        conta1.depositar(500);
        conta1.sacar(200);
        conta1.exibirDados();

        console.log("");

        const pessoa2 = new Pessoa("Maria", 30);
        const conta2 = new Poupanca(pessoa2, 2000, 5);
        conta2.aplicarRendimentos();
        conta2.exibirDados();
    } catch (error: any) {
        console.error(error.message);
    }
}

main();
