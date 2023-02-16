const axios = require('axios');
const cTable = require('console.table');
// const { response } = require('express');


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

