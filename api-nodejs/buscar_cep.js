//const axios = require('axios').default;
const prompt = require('prompt-sync')();
const cepv = prompt('Digite o CEP: ');
const cep = cepv;
const cTable = require('console.table');

axios = (`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => resposta(resposta.data })
    .catch(function(error){
        console.log(error);
    })

console.log(data);


// const BuscarCepURL = `https://viacep.com.br/ws/${cep}/json/`
// const {data} = axios.get(BuscarCepURL);
// console.log({data}.cTable.cep);
// const table = data.getTable([
//     {
        
//         cep: data.cep,
//         logradouro: data.logradouro,
//         bairro: data.bairro,
//         uf: data.uf

//     }
// ])



// console.log(BuscarCepURL);