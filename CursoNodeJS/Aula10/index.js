/**
 * Operadores Aritméticos
 * 
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 */

const num1 = 10;
const num2 = 2;


// Adição
console.log('Adição: 10 + 20: ', num1 + num2);

// Subtração
console.log('Subtração 20 menos 10: ', num2 - num1);

// Divisão
console.log('Divisão: 20 Dividido por 10: ', num2 / num1);

// Potenciação
console.log('Potenciação: 10 elevado 20: ', num1 ** num2); 

// Resto da divisão
console.log('Resto da divisão: 20 % 10: ', num2 % num1); 


//Incremento
let num3 = 1;
num3 ++; // Incremento
//ou 
num3 = num3 + 2;
// outra opção
num3 += 10;

console.log('Inclemento num3 = 1 / num3++');


/**
 *  NaN - Not a number parseInt(inteiro) => faz conversão para numero inteiro
    parseFloat(decimais) => converte numeros flutuante para decimal
 *  */

const num4 = parseInt('5');
console.log(num4*2);

