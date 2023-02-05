const alunos = ['Elias', 'Bruna', 'Emanuel', 'Gael', 'Matheus'];


// alunos [5] = 'Davi'; //incluir mais itens em um arry

// alunos[alunos.length] = 'Luiza'; //Incluir no array sem saber o indice.
// alunos[alunos.length] = 'Luana'; //Incluir no array sem saber o indice.

// alunos.push('Luiza'); //função que permite inserir no array sem saber o indeice => adiciona no fim do array
// alunos.push('Fábio'); //função que permite inserir no array sem saber o indeice => adiciona no fim do array

alunos.unshift('Luiza'); // adicionar no começo do array.
alunos.unshift('Marcos'); // adicionar no começo do array.

//const removido = alunos.shift();
//console.log(removido);

delete alunos[4]; // remover item informando o indice SSSdo array


//alunos.pop();  //remove o ultimo item do array.
//alunos.shift(); //remove o primeiro item do array.


console.log(alunos);
// console.log(alunos[0]);

//console.log(alunos.length); //ver tamanho do array


console.log(alunos instanceof Array); // Para perguntar se é um array