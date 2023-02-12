// for of

const nome = ['Elias']
// const nome = 'Elias Floriano';

// for(i=0; i < nome.length; i++){
//     console.log(nome[i]);
// }


// for of trás o valor e não o indice
// for (let valor of nome){
//     console.log(valor);
// }

//foreach
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);    
});