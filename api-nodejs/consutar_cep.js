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
 


const axios = require('axios').default
const cTable = require('console.table')
const getEndereco = async (cep) => {
    try {
        const BuscarCepURL = `https://viacep.com.br/ws/${cep}/json/`
        const {data} = await axios.get(BuscarCepURL)

        const table = cTable.getTable([
            {
                
                cep: data.cep,
                logradouro: data.logradouro,
                bairro: data.bairro,
                uf: data.uf,
                cidade: data.localidade

            }
        ])
        
        console.log(table);

        return data
    } catch (error) {
        console.error(error)
    }
}


// axios = (`https://viacep.com.br/ws/15048-112/json/`)
// .then(resposta => resposta.data);

// console.log(data);



// //const cTable = require('console.table'); 

// //const BuscarCepURL = `https://viacep.com.br/ws/15048-112/json/`;
// //const data = axios.get(BuscarCepURL);


// console.log(data);
// // module.exports

// // console.log(module.exports);


// // const table = cTable.getTable([
// //     {
// //         cep:,
// //         logradouro: 

        
        
// //     }
// // ])

// // module.exports 
// // console.log(cTable);