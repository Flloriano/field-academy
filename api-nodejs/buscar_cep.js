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

module.exports = { getEndereco }