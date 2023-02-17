
const axios = require('axios');
const cTable = require('console.table');
const { CsvWriter } = require('csv-writer/src/lib/csv-writer');


axios('https://otaviomiranda.com.br/files/json/pessoas.json')
.then(response => {
    const pessoas = response.data.map(pessoa => ({
        cpf: pessoa.cpf,
        email: pessoa.email,
        empresa: pessoa.empresa,
        estado: pessoa.estado,
        salario: pessoa.salario.toLocaleString('pt-BR', {style:'currency', currency: 'BRL' }) //para deixar valor formatado em real
        
    }))
   
   const table = cTable.getTable(pessoas);

   console.log(table);
})
.catch(e => console.log(e));



const { promises: fs } = require('fs');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createCsvWriter = createCsvWriter({
    path: './forecast.csv',
    header: ['nome', 'salario', 'estado', 'idade'].map((item) => ({ id: item, title: item}))
})

async function main() {
    const file_data = await fs.readFile('pessoas.json');
    const parsed_data = JSON.parse(file_data);

    try{
        await CsvWriter.writeRecords(parsed_data.forecast.forescastday[0].hour);
    } catch (error) {
        console.log(error);
    }

}

main();






































// import { parse } from 'json2csv';
// const obj = [
//   { firstName: 'Russell', lastName: 'Castillo', age: 23 },
//   { firstName: 'Christy', lastName: 'Harper', age: 35 },
//   { firstName: 'Eleanor', lastName: 'Mark', age: 26 },
// ];

// const csv = parse(obj);

// console.log(csv);


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


