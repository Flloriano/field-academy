// // // const mod1 = require('./app');
// // // const falaNome = mod1.falaNome;
// // // console.log(falaNome);

// // const { falaNome } = require('./app');


// // //const falaNome = require('./app').falaNome;
// // const mod1 = require('./app').falaNome;
// // //const falaNome = mod1.falaNome;
// // console.log(falaNome());
// // //const mod1 = require('./app');
// // // const falaNome = mod1.falaNome;
// // // console.log(falaNome);


// const {nome, sobrenome, falaNome} = require('./app');
// console.log(nome);
// console.log(falaNome());

// const { Pessoa } = require('./app');

// const p1 = new Pessoa('Elias');
// console.log(p1);


const path = require('path');
const axios = require('axios');

axios('https://brapi.dev')
.then(response => console.log(response.data))
.catch(e => console.log(e));