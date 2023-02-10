//Atribuição via desestruturação (Arrays)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [ um, , tres, , cindo, ...resto] = numeros;
// console.log(um, tres, cindo);
// console.log(resto); //pegar o resto do Array


const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[1]);