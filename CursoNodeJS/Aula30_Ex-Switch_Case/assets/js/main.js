const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getMilliseconds();


function getDiaSemana(diaSemana) {


    // Maneira mais simples de resolver e não trabalhar com Switch

    let diaSemanaTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado' ];

    return diaSemanaTexto[diaSemana];
    // switch (diaSemana) {
    //     case 0:
    //         diaSemanaTexto = 'Domingo';
    //         return diaSemanaTexto;
    //     case 1:
    //         diaSemanaTexto = 'Segunda-feira';
    //         return diaSemanaTexto;
    //     case 2:
    //         diaSemanaTexto = 'Terça-feira';
    //         return diaSemanaTexto;
    //     case 3:
    //         diaSemanaTexto = 'Quarta-feira';
    //         return diaSemanaTexto;
    //     case 4:
    //         diaSemanaTexto = 'Quinta-feira';
    //         return diaSemanaTexto;
    //     case 5:
    //         diaSemanaTexto = 'Sexta-feira';
    // 
    

}


function getMes(mes) {

    let mesTexto;

    switch(mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;

        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Julho'
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
    }

}

    const diaSemanaT = getDiaSemana(diaSemana);
    const diaMes = getMes(mes);

    const h1 = document.querySelector('.container h1');
    h1.innerHTML = `${diaSemanaT}, ${dia} de ${diaMes} de ${ano} ${hora}:${min}`;
  



// Maneira simplificada de fazer a mesma coisa

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {

//     dateStyle: 'full', 
//     //timeStyle: 'short'

// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);



