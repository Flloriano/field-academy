const buscarCep = require('./buscar_cep');
const prompt = require('prompt-sync')()


const main = async () => {
    let cep = ''
    do {
        cep = prompt('Informe o CEP para a consulta');
        if(cep){
            const endereco = await buscarCep.getEndereco(cep)
            console.log(endereco)
        } else {
            cep = false
        }
     } while (cep)
}

main ()