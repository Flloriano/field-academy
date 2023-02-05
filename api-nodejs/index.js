const axios = require('axios').default;
const cTable = require('console.table'); 

const BuscarCepURL = `https://viacep.com.br/ws/15048-112/json/`;
const data = axios.get(BuscarCepURL);
console.log(module.exports);


// const table = cTable.getTable([
//     {
//         cep:,
//         logradouro: 

        
        
//     }
// ])

// module.exports 
// console.log(cTable);