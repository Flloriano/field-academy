const pessoa = {
    nome: 'Elias',
    sobrenome: 'Floriano',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição normal
// const nome = pessoa.nome;
// console.log(nome);
// console.log(pessoa.nome);



//Atribuição via desestruturação
// const { nome: teste, //atribuir outro nome para variavel 
//     sobrenome = '', // declarar valor padrão
//     idade 
// } = pessoa;

//const { endereco } = pessoa;

const { endereco: { rua, numero} } = pessoa; 

//console.log(teste, sobrenome);

console.log(rua, numero);