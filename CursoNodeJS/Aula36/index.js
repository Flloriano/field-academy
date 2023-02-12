const frutas = ['Pera', 'Maça', 'Uva']; //array frutas

const pessoa = { //Objeto pessoa
    nome: 'Elias',
    sobrenome: 'Floriano',
    idade: 30
} 

// for(i=0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }


// for (let i in frutas) {
//     console.log(frutas[i]);
// }

//console.log(pessoa.nome);
//console.log(pessoa['nome']);


for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}