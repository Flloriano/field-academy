let umaString = "Um \"texto\""; // =>  utiliza a \ para colocar o aspas
let testeString = "Um \\texto"; // =>  utiliza a \ para colocar barra invertida
let caracterString = "Um texto";


//console.log(umaString);
//console.log(testeString);


//console.log(caracterString[5]); // Pega o caractere nessa posição dentro da string
//console.log(caracterString.charAt(15)); // faz a mesma coisa mas ao informar uma posição inexistente não retorna undefined.

//console.log(caracterString.indexOf('texto')); //Mostra em qual index começa a palavra informada.
//console.log(caracterString.indexOf('Um', 3));


//console.log(caracterString.lastIndexOf('Um', 3));

//console.log(caracterString.match(/[a-z]/)); //Expressões regulares
//console.log(caracterString.match(/[a-z]/g));


// //console.log(caracterString.search(/x/)); // Mostra o index nicial e permite expressões regulares


// console.log(caracterString.replace('Um', 'Outra')); // replace
// console.log(caracterString);
// console.log(caracterString.replace(/t/, '#')); // Replace substitui apenas um caractere
// console.log(caracterString.replace(/t/g, '#')); // Replace substitui todos caracteres
// console.log(caracterString.length); // Pegar o tamanho da string

// console.log(caracterString.slice(3, 9)); // Pegar posição especifica da string

// console.log(caracterString.slice(3, -2)); // Pegar posição especifica da string


// console.log(caracterString.substring(caracterString.length - 5, caracterString.length - 1)); // Realiza a mesma coisa que o splice


// console.log(caracterString.split(' ')); // seperar pelo caracter informado
// console.log(caracterString.split('t')); 
console.log(caracterString.split(' ', 1)); // informar quantas vezes quer que aconteça

console.log(caracterString.toUpperCase()); //Deixar em maiúsculo 
console.log(caracterString.toLowerCase()); //Deixar em minusculo
