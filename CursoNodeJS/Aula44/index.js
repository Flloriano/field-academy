

// try{
//     console.log(teste);
// } catch (error){
//     console.log('Erro teste');
// }



function soma(x, y) {
    if(typeof x !== "number" || typeof y !== "number"){
        throw new ReferenceError ('Digite um numero!')
    }
    return x + y;
}

try{
    console.log(soma('10', 32));
}catch(error) {
    console.log('teste error');
}
