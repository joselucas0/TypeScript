"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.setNome(nome);
        this.setIdade(idade);
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        if (nome.length < 3) {
            throw new Error("Nome deve ter mais de 3 caracteres.");
        }
        this.nome = nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        if (idade < 0) {
            throw new Error("Idade não pode ser negativa.");
        }
        this.idade = idade;
    };
    Pessoa.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome, ", Idade: ").concat(this.idade));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
