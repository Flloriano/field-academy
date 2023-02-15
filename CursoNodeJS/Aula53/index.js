// Closures é habilidade da função de acessar o seu escopo léxico.

function retornaFuncao(){
    const nome = 'Elias';
    return function(){
        return nome;
    }
}


const funcao = retornaFuncao();

console.dir(funcao);