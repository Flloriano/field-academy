
//arguments que sustenta todos os arqgumentos enviados apenas para funções coma palavra function

// function somar(){
//     let valor = 0;
//     for(let argumento of arguments){
//         valor += argumento;
//     }    
//     console.log(valor);
// }

// somar(1, 2, 3, 4, 5);


// Informar valor padrão para os argumentos caso não seja informado o valor
// function somar(a, b = 2, c = 4){
//     console.log(a + b + c);   
// }

// // somar(1);

// somar(2, undefined, 5);


function conta(operador, acumulador, ...numeros){
    for(let num of numeros){
       if (operador === '+') acumulador += num;
       if (operador === '-') acumulador -= num;
       if (operador === '/') acumulador /= num;
       if (operador === '*') acumulador *= num;
     //  console.log(arguments);
    }
    console.log(acumulador);
}

conta('*', 0,10, 20, 30);
conta('-', 0, 20, 30);
conta('+', 0, 20, 30);
conta('/', 1, 20, 30);