const path = require('path');
const axios = require('axios').default;
const cTable = require('console.table');


const pessoas = 'https://www.otaviomiranda.com.br/files/json/pessoas.json'
const {data} = axios.get(pessoas)

// .then(cTable => console.log(cTable.data))
// .catch(e => console.log(e));
// const viaCepURL = `https://viacep.com.br/ws/${cep}/json/`
//         const {data} = await axios.get(viaCepURL)


 const table = cTable.getTable([
    {
        nome:
    }
  ])

console.log(data);