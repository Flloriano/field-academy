const axios = require('axios');
const cTable = require('console.table');


axios('https://otaviomiranda.com.br/files/json/pessoas.json')
.then(response => {
    const pessoas = response.data.map(pessoa => ({
        cpf: pessoa.cpf,
        email: pessoa.email,
        empresa: pessoa.empresa,
        estado: pessoa.estado,
        salario: pessoa.salario
    }))
   
   const table = cTable.getTable(pessoas);

   console.log(table);
})
.catch(e => console.log(e));


// import { stringify } from 'csv-stringify/sync';
// const run = () => {
//     const output = stringify([
//         { test: 'oloco', test2: 'a'},
//         { test: 'oloc2' },
//     ], {
//         header: true,
//         objectMode: true
//     });
//     console.log(output);
// }
// run();