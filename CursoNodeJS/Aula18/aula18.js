// const pessoa = {
//     nome: 'Elias',
//     sobrenome: 'Floriano',
//     idade: 30
// }; // quando usar colchete é array, quando usar chaves é um objeto

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);
// console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos de idade `);


// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

//ou pode ser feito dessa forma


function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Elias', 'Floriano', 25);
const pessoa2 = criaPessoa('Emanuel', 'Souza', 18);


console.log(pessoa1.nome, pessoa2.nome);