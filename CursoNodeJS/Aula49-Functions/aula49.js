// Declação de funções (Function hosting)

souUmDado();
function souUmDado() {
    console.log('Teste Declaração!');
}

// Firs-class objects 
const souUmDado2 = function(){
    console.log('Teste 2 Declaração Function');
}

souUmDado2();



//Arrow function
const funcaoArrow = () => {
    console.log('Teste realizados');
}

funcaoArrow();



// Dentro de um objeto

// const obj = {
//     falar: function(){
//         console.log('Estou falando...')
//     }
// }

// obj.falar();

// Outra Maneira
const obj = {
    falar(){
        console.log('Estou falando...')
    }
}

obj.falar();