const express = require('express');
const app = express();


// CRUD => CREATE (Post), READ (Get), UPDATE (Put), DELETE (Delete)
//http://meusite.com/ <- GET -> Entregue a página


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
      Cliente: <input type="text" name="nome">
      <button>Salvar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário!');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


