// escopo léxico


const nome = 'Elias';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
   //const nome = 'Floriano'; 
    falaNome();
}

usaFalaNome();