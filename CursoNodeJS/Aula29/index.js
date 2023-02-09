const data = new Date();
let diaSemana = data.getDay();


// switch(diaSemana) {
// case 0:
//   diaSemanaTexto = 'Domingo';
//   break;

// case 1:
//   diaSemanaTexto = 'Segunda-feira';
//   break;
    
// case 2:
//   diaSemanaTexto = 'Terça-feira';
//   break;
  
// case 3:
//    diaSemanaTexto = 'Quarta-feira';
//    break;
  
// case 4:
//   diaSemanaTexto = 'Quinta-feira';
//   break;
  
// case 5:
//   diaSemanaTexto = 'Sexta-feira';
//   break;
  
// case 6:
//   diaSemanaTexto = 'Sabado';
//   break;

// default:
//   diaSemanaTexto = '';
//   break;

// }

function getDiaSemana(diaSemana){

    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
          diaSemanaTexto = 'Domingo';
          return diaSemanaTexto;
        
        case 1:
          diaSemanaTexto = 'Segunda-feira';
          return diaSemanaTexto;
            
        case 2:
          diaSemanaTexto = 'Terça-feira';
          return diaSemanaTexto;
          
        case 3:
           diaSemanaTexto = 'Quarta-feira';
           return diaSemanaTexto;
          
        case 4:
          diaSemanaTexto = 'Quinta-feira';
          return diaSemanaTexto;
          
        case 5:
          diaSemanaTexto = 'Sexta-feira';
          return diaSemanaTexto;
          
        case 6:
          diaSemanaTexto = 'Sabado';
          return diaSemanaTexto;
        
        default:
          diaSemanaTexto = '';
          return diaSemanaTexto;
        
        }
        diaSemanaTexto
}
let diaSemanaTexto;
console.log(diaSemana, diaSemanaTexto);