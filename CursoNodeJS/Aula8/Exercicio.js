/*
Luiz Otávio Miranda tem 30 AnalyserNode, pesa 84 kg|
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1980.
*/

const nome = 'Elias';
const sobrenome = 'Floriano';
const idade = 31;
const peso = 150;
const altura = 1.87;
let imc;
let anoNascimento;

imc = (peso/(altura * altura));
anoNascimento = 2023 - idade;

//concaternar
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos de idade, pesa ' + peso + 'kg');
//Template de strings ${nome da variavel}
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento);

