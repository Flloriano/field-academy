// Import csv-writer
import csvwriter from 'csv-writer';
import axios from 'axios';
import cTable from 'console.table'; 
var createCsvWriter = csvwriter.createObjectCsvWriter


const pegaDados = () => axios('https://otaviomiranda.com.br/files/json/pessoas.json')
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
.catch(e => console.log(e))


  
// Passing the column names intp the module
const csvWriter = createCsvWriter({
  // Output csv file name is geek_data
  path: 'exercANode.csv',
  Headers: pegaDados()
 
});
  
// Values for each column through an array

// Writerecords function to add records
csvWriter
  .writeRecords(pegaDados())
  .then(()=> console.log('Arquivo Gerado com Sucesso!'));


