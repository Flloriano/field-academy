const express = require('express');
const route = express.Router();


route.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
      Cliente: <input type="text" name="nome">
      Sobrenome: <input type="text" name="sobrenome">
      <button>Salvar</button>
    </form>
    `);
});