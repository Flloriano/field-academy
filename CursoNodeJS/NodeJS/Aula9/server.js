const express = require('express');
const app = express();
const routes = require('./routes')


app.use(express.urlencoded({ extended: true }));
app.use(routes);



// CRUD => CREATE (Post), READ (Get), UPDATE (Put), DELETE (Delete)
//http://meusite.com/ <- GET -> Entregue a página


// app.get('/', (req, res) => {
//     res.send(`
//     <form action="/" method="POST">
//       Cliente: <input type="text" name="nome">
//       Sobrenome: <input type="text" name="sobrenome">
//       <button>Salvar</button>
//     </form>
//     `);
// });

// app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.facebookprofile);
// })

// app.post('/', (req, res) => {
//     console.log(req.body);
//   //  res.send(`O que você me enviou foi: ${req.body.nome}`);
//     res.send(`O que você me enviou foi: ${req.body.sobrenome}`);
// })

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


