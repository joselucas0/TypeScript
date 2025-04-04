// Operadores Aritméticos
var a = 10; // são os tipos primitivos do TypeScript é igual ao do JavaScript
var b = 5;
var totalSoma = a + b; // soma
var totalSubtracao = a - b; // subtração
var totalMultiplicacao = a * b; // multiplicação
var totalDivisao = a / b; // divisão
var totalResto = a % b; // resto da divisão
console.log("Soma: ".concat(totalSoma, " + Subtra\u00E7\u00E3o: ").concat(totalSubtracao, " + Multiplica\u00E7\u00E3o: ").concat(totalMultiplicacao, " + Divis\u00E3o: ").concat(totalDivisao, " + Resto: ").concat(totalResto));
// Operadores de texto
var nome = "Lucas";
var sobrenome = "Silva";
var textoConcatenado = nome + sobrenome; // concatenação de strings
console.log('Nome completo: ${textoConcatenado}');
var textoRepetido = nome.repeat(3); // repetição de strings
console.log('Nome repetido: ${textoRepetido}');
// Operadores de comparação
var comparacao1 = a == b; // comparação de igualdade
var comparacao2 = a != b; // comparação de desigualdade
var comparacao3 = a === b; // comparação de igualdade estrita
var comparacao4 = a !== b; // comparação de desigualdade estrita
console.log('Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}');
// Operadores de comparação com lógicos
console.log("Nome completo: ".concat(textoConcatenado));
console.log("Nome repetido: ".concat(textoRepetido));
console.log("Compara\u00E7\u00E3o 1: ".concat(comparacao1, " + Compara\u00E7\u00E3o 2: ").concat(comparacao2, " + Compara\u00E7\u00E3o 3: ").concat(comparacao3, " + Compara\u00E7\u00E3o 4: ").concat(comparacao4));
