//Função construtora sempre começa com a primeira letra maiuscula


//const data = new Date(0); // marco zero Timestamp unix ou época unix
// const umDia = ((60*60)*24)*1000; //um dia em milessimos de segundos
//const data = new Date(2023, 2, 9, 15, 14, 27, 999); // ano, mes, dia, minutos, milessimos de segundos.
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay());

//console.log(data.toString());
//console.log(umDia);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`; 
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);