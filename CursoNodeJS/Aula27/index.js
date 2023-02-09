const pontuacaoUsuario = 1000;

/**
 * Forma normal para utilizar if / else
 * 
 * if(pontuacaoUsuario >= 1000){
 *  console.log('Usuario VIP');
 * } else {
 *  console.log('Usuario normal');
 * }
 * 
 */


//Operação Ternaria => exemplo: (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal';

//or
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

