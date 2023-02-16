//setInterval e SetTimeout

// para parar de executar função ctrl + alt + m e digitar stop code run



function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);


setTimeout(function() {
    console.log('Teste SetTimeout');
}, 4000);