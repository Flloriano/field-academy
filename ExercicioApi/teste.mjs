// Import csv-writer
import csvwriter from 'csv-writer';
import axios from 'axios';
import cTable from 'console.table';

//const axios = require('axios');
//const cTable = require('console.table');
let createCsvWriter = csvwriter.createObjectCsvWriter


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

   const csvWriter = createCsvWriter({
  
    // Output csv file name is geek_data
    path: 'TesteExercicioApi.csv',
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
  const results = pessoas;
  // Writerecords function to add records
  csvWriter
    .writeRecords(results)
    .then(()=> console.log('Arquivo Gerado com Sucesso!!!'));




})
.catch(e => console.log(e))

















