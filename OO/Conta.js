"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corrente = exports.Poupanca = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0)
            throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= 0)
            throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo)
            throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    };
    Conta.prototype.exibirDados = function () {
        console.log("Titular: ".concat(this.titular.getNome(), ", Saldo: ").concat(this.saldo));
    };
    return Conta;
}());
exports.Conta = Conta;
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(titular, saldo, taxaJuros) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    Poupanca.prototype.aplicarRendimentos = function () {
        var juros = this.saldo * (this.taxaJuros / 100);
        this.depositar(juros);
    };
    Poupanca.prototype.exibirDados = function () {
        console.log("Titular: ".concat(this.titular.getNome(), ", Saldo: ").concat(this.saldo, ", Tipo: Conta Poupan\u00E7a"));
    };
    return Poupanca;
}(Conta));
exports.Poupanca = Poupanca;
var Corrente = /** @class */ (function (_super) {
    __extends(Corrente, _super);
    function Corrente(titular, saldo, limite) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limite = limite;
        return _this;
    }
    Corrente.prototype.sacar = function (valor) {
        if (valor <= 0)
            throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo + this.limite)
            throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    };
    Corrente.prototype.exibirDados = function () {
        console.log("Titular: ".concat(this.titular.getNome(), ", Saldo: ").concat(this.saldo, ", Tipo: Conta Corrente"));
    };
    return Corrente;
}(Conta));
exports.Corrente = Corrente;
