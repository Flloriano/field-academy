//map

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Elias', idade: 52},
    {nome: 'Emanuel', idade: 12},
    {nome: 'Gael', idade: 12},
    {nome: 'Daniel', idade: 82},
    {nome: 'Bruna', idade: 22},
];


// const nome = pessoas.map(function(valor) {
//     return valor.nome;

// });

const nome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(function(obj) {
    //delete obj.nome; // excluir campo do obj
    return { idade: obj.idade }; // trazer apenas o campo idade dessa forma
    //return obj; //retornar o obj completo
});

const idades = pessoas.map(obj => ({idade: obj.idade}));

// para adicionar id manipular o array

// const objId = pessoas.map(function(obj, indice){
//     obj.id = (indice + 1);
//     return obj;
// })

// para adicionar o id sem manipular o array

const objNewId = pessoas.map(function(obj, indice){
    const newObj = { ...obj};
    newObj.id = (indice + 1);
    return newObj;
})




console.log(pessoas);
console.log(objNewId);