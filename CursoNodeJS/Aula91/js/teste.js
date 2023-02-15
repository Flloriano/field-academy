axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));
 console.log(carregaElementosNaPagina);
  