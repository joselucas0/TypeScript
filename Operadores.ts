namespace Operadores {
	// Operadores Aritméticos
	let a: number = 10; // são os tipos primitivos do TypeScript é igual ao do JavaScript
	let b: number = 5;
	let totalSoma: number = a + b; // soma
	let totalSubtracao: number = a - b; // subtração
	let totalMultiplicacao: number = a * b; // multiplicação
	let totalDivisao: number = a / b; // divisão
	let totalResto: number = a % b; // resto da divisão

	console.log(`Soma: ${totalSoma} + Subtração: ${totalSubtracao} + Multiplicação: ${totalMultiplicacao} + Divisão: ${totalDivisao} + Resto: ${totalResto}`);

	// Operadores de texto
	let nome: string = "Lucas";
	let sobrenome: string = "Silva";
	let textoConcatenado: string = nome + sobrenome; // concatenação de strings
	console.log(`Nome completo: ${textoConcatenado}`);
	let textoRepetido: string = nome.repeat(3); // repetição de strings
	console.log(`Nome repetido: ${textoRepetido}`);

	// Operadores de comparação
	let comparacao1: boolean = a == b; // comparação de igualdade
	let comparacao2: boolean = a != b; // comparação de desigualdade
	let comparacao3: boolean = a === b; // comparação de igualdade estrita
	let comparacao4: boolean = a !== b; // comparação de desigualdade estrita
	console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

	// Operadores de comparação com lógicos

	console.log(`Nome completo: ${textoConcatenado}`);
	console.log(`Nome repetido: ${textoRepetido}`);
	console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

	// Operador de Nullish coalescing
	let valorNulo: number | null = 10; // valor nulo
	let valorDefault: number = valorNulo ?? 11; // operador de nullish coalescing
	console.log(`Valor nulo: ${valorNulo} + Valor default: ${valorDefault}`);

	// Operador de spread
	let numeros: number[] = [1, 2, 3, 4, 5]; // array de numeros
	let novosNumeros: number[] = [...numeros, 6, 7, 8]; // operador de spread
	console.log(`Numeros: ${numeros} + Novos numeros: ${novosNumeros}`);

	// Operador de destructuring
	let pessoa: { nome: string; idade: number } = { nome: "Lucas", idade: 25 }; // objeto pessoa
	let { nome: nomePessoa, idade: idadePessoa } = pessoa; // operador de destructuring
	console.log(`Nome: ${nomePessoa} + Idade: ${idadePessoa}`);
}








