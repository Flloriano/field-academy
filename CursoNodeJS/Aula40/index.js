const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let numero of numeros){
    
//     if(numero === 3){
//         console.log('Pulei numero 3');
//         continue;
//     }
//     console.log(numero);
// }



for(let numero of numeros){

    console.log(numero);
    
    if(numero === 7){
        console.log('saindo!!!');
        break;
    }
    
}