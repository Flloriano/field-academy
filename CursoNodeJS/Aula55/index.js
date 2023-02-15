//IIFE -> Immediately invokek function expression
//Função anonima fica entre parenteses.


(function(idade, peso, altura) {
    const sobrenome = 'Floriano';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Elias'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(30, 150, 1.87);

const nome = 'Souza';