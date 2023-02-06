const path = require('path');

const nome = 'Elias';
const sobrenome = 'Floriano';


class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}


exports.Pessoa = Pessoa;


console.log(Pessoa);


console.log(__filename); // Caminho do arquivo 
console.log(__dirname); // Caminho da pasta
console.log(path.resolve(__dirname, '..', '..')); // volta uma pasta

