const { resolve } = require("path");

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO'); // ou new Error('ERRO')
                return; // Parar assim que ocorrer o erro
            }
    
            resolve(msg.toUpperCase() + ' - Passei pela Promise');
            return;

        }, tempo);
    });    
}





// Promise.all Promise.race Promise.resolve Promise.reject

//Promise.all => retorna todas as promises
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),

//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });



//Promise.race => o primeiro que retornar mostrar na tela
// const promises = [
//    // 'Primeiro valor',
//     esperaAi('Promise 1', rand(1, 3)),
//     esperaAi('Promise 2', rand(1, 3)),
//     esperaAi('Promise 3', rand(1, 3)),
//     esperaAi(1000, rand(1, 3)),

//     //'Outro valor'
// ];

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });


//Promise.resolve
// function baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return esperaAi('Baixei a pagina', 3000);
//     }
// }


// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));


//Promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}


baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e));