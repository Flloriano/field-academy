// Import csv-writer
import csvwriter from 'csv-writer'
  
var createCsvWriter = csvwriter.createObjectCsvWriter
  
// Passing the column names intp the module
const csvWriter = createCsvWriter({
  
  // Output csv file name is geek_data
  path: 'exercicioANode.csv',
  header: [
  
    // Title of the columns (column_names)
    {id: 'cpf', title: 'CPF'},
    {id: 'email', title: 'EMAIL'},
    {id: 'empresa', title: 'EMPRESA'},
    {id: 'estado', title: 'ESTADO'},
    {id: 'salario', title: 'SALARIO'}
  ]
});
  
// Values for each column through an array
const results = [
  {
    cpf: '410.528.963-98',
    email: 'teste@gmail.com',
    empresa: 'google'
  },
  {
    cpf: '410.528.963-98',
    email: 'teste@gmail.com',
    empresa: 'google'
  },
  {
    cpf: '410.528.963-98',
    email: 'teste@gmail.com',
    empresa: 'google'
  },
    
];
// Writerecords function to add records
csvWriter
  .writeRecords(results)
  .then(()=> console.log('Data uploaded into csv successfully'));