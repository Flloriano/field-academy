const BuscarCEP = require('./buscar_cep');
const prompt = require('prompt-sync')();

const main = async () => {
    let cep = ''
    do {
        cep = prompt('Qual o cep que deseja consultar?');
        if (cep) {
            const endereco = await BuscarCEP.getEndereco(cep)
            console.log(endereco)
        } else {
            cep = false
        }
    } while (cep)

}

main()
 