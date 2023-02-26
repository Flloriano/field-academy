

exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
      Cliente: <input type="text" name="nome">
      Sobrenome: <input type="text" name="sobrenome">
      <button>Salvar</button>
    </form>
    `);

};

exports.trataPost = (req, res) => {
        res.send('Nova rota de POST.');
};
