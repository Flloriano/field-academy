function rand(min=0, max=3){
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


// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// })
// .then(fase => {
//     console.log('Terminamos na fazer:', fase)
// })
// .catch(e => console.log(e));

async function executar(){
    try{

        const fase1 = esperaAi('Fase 1', rand());
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);
    
        const fase2 = await esperaAi(11, rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fazer:', fase3);

    } catch(e){
        console.log(e);
    }
   
}

executar();


/**
 * Promises tem 3 estados; 
 * pending (quando está sendo executada e ainda não retornou o valor), 
 * fullfilled => resolvida
 * rejected => rejeitada
 */