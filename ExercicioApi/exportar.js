const { promises: fs } = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'forecast.csv',
    header: ['nome', 'salario', 'estado', 'idade'].map((item) => ({ id: item, title: item}))
})

async function main() {
    const file_data = await fs.readFile('pessoas.json');
    const parsed_data = JSON.parse(file_data);

    // try{
    //     await csvWriter.writeRecords(parsed_data.pessoas.pessoas[0].hour);
    // } catch (error) {
    //     console.log(error);
    // }

}

main();