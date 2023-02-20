const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'gerarArquivo.json');
const escreve = require('./escrever');
const ler = require('./ler');

//Para escrever a o arquivo JSON
// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Pedro'},
//     {nome: 'Thiago'},
//     {nome: 'Matheus'},
//     {nome: 'Barnabé'},
//     {nome: 12345},
//     {nome: null},
// ];


// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);






// Para ler o arquivo JSON


async function lerArquivo(caminho){ //sempre que usamos uma função com async ela retorna uma promessa
    const dados = await ler(caminho);
    //console.log(dados);
    //return dados;
    renderizaDados(dados);
}


// const dadosArquivo = lerArquivo(caminhoArquivo)
// .then(dados => console.log(dados));
//console.log(dadosArquivo);


function renderizaDados(dados){
    //console.log(dados);
    dados = JSON.parse(dados); //para os dados voltarem a ser objeto
    dados.forEach(val => console.log(val.nome));
}
lerArquivo(caminhoArquivo);