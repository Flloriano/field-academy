// Constantes não pode ter seu valor alterado. Com isso, não podem ser declaradas sem queo valor seja definido.
// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Constantes não podem começar com numero.
// O nome das Constantes não pode conter espaço ou traços
// Para Constantes com nome composto usar o padrão camelCase
// A Constantes são Case-sensitive. O que significa que as letras maiusculas e minusculas tem diferencia

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);


// Saber qual é o tipo
console.log(typeof(primeiroNumero));
// ou
console.log(typeof primeiroNumero);

// Para verificar em uma expressão
console.log(primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));