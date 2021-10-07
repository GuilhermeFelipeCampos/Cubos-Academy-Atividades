
const { instAxios } = require('../configs/configDomainCompany');
const fs = require('fs');




const consultaEmpresas = async (req, resp) => {

    const { dominioEmpresa } = req.params;

    fs.readFile('empresas.json', async (err, data) => {
        if (err) {
            return resp.status(400).json(err);
        }

        const companies = JSON.parse(data);


        const empresaExiste = companies.find((item) => item.domain === dominioEmpresa);

        if (empresaExiste) {
            return resp.json(empresaExiste);
        } else {

            try {
                const dados = await instAxios.get("", {
                    params: {
                        domain: dominioEmpresa,
                    }
                });
                if (!dados.data.name) {
                    return resp.json(dados.data);
                }
                companies.push(dados.data);
                console.log(companies);
                fs.writeFile("empresas.json", JSON.stringify(companies, null, 2), (err) => {
                    if (err) {
                        return resp.status(400).json(err);
                    }
                })


                return resp.json(dados.data);

            } catch (error) {

                return resp.status(400).json(error);
            }
        }
    })





}

module.exports = {
    consultaEmpresas,
};