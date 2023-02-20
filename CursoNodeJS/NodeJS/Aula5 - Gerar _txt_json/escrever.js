const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

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


// const json = JSON.stringify(pessoas, '', 2)

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'}); //encoding: 'utf8' });
};

