const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'gerarArquivo.json');
const escreve = require('./escrever');

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Pedro'},
    {nome: 'Thiago'},
    {nome: 'Matheus'},
    {nome: 'Barnabé'},
    {nome: 12345},
    {nome: null},
];


const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);