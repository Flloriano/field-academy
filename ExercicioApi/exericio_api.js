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


// import { parse } from 'json2csv';
// const obj = [
//   { firstName: 'Russell', lastName: 'Castillo', age: 23 },
//   { firstName: 'Christy', lastName: 'Harper', age: 35 },
//   { firstName: 'Eleanor', lastName: 'Mark', age: 26 },
// ];

// const csv = parse(obj);

// console.log(csv);


// import { stringify } from 'csv-stringify';
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