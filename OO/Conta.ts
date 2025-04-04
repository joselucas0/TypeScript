import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }

    public exibirDados(): void {
        console.log(`Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`);
    }
}

export class Poupanca extends Conta {
    private taxaJuros: number;

    constructor(titular: Pessoa, saldo: number, taxaJuros: number) {
        super(titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    public aplicarRendimentos(): void {
        const juros = this.saldo * (this.taxaJuros / 100);
        this.depositar(juros);
    }

    public override exibirDados(): void {
        console.log(`Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Tipo: Conta Poupança`);
    }
}

export class Corrente extends Conta {
    private limite: number;

    constructor(titular: Pessoa, saldo: number, limite: number) {
        super(titular, saldo);
        this.limite = limite;
    }

    public override sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo + this.limite) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }

    public override exibirDados(): void {
        console.log(`Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Tipo: Conta Corrente`);
    }
}
