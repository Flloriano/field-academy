const axios = require('axios');
const cTable = require('console.table');


tocsv = (
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
.catch(e => console.log(e))
);




