const axios = require('axios');
const cTable = require('console.table');
const getEndereco = async (cep) => {
    try {
        const viaCepURL = `https://viacep.com.br/ws/${cep}/json/`
        const {data} = await axios.get(viaCepURL)

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

module.exports = { getEndereco }
