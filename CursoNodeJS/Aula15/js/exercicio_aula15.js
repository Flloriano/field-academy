
const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz Quadrada é: <b>${Math.sqrt(numero)}</b></p>`;
//texto.innerHTML = `<p> Raiz Quadrada é: <b>${numero ** 0.5}</b></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <b>${Number.isInteger(numero)}</b><br></p>`;
texto.innerHTML += `<p>é NaN: <b>${Number.isNaN(numero)}</b><br></p>`;
texto.innerHTML += `<p>Arredonde para baixo: <b>${Math.floor(numero)}</b><br></p>`;
texto.innerHTML += `<p>Arredonde para cima: <b>${Math.ceil(numero)}</b><br></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <b>${numero.toFixed(2)}<b></p>`;

