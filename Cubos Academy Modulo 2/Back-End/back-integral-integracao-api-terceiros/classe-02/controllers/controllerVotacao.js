const { instAxios } = require('../configs/configDomainLocation');
const fs = require('fs/promises');


const addData = async (obj) => {
    const file = JSON.parse(await fs.readFile('./database/votos.json'));
    const voto = file.votos;
    voto.push(obj);

    fs.writeFile('./database/votos.json', JSON.stringify(file, null, 2));
}


const vote = async (req, resp) => {

    const { voto } = req.body;
    const { pais, ip } = req.params;

    try {
        const returnCountryIp = await instAxios.get('', {
            params: {
                ip_address: ip,
            }
        });
        const { data } = returnCountryIp;
        if (data.country === pais) {

            addData({
                ip,
                voto
            })
            resp.json({
                message: "Voto Válido!"
            });
        } else {
            resp.status(400).json({
                error: "IP enviado não coincide com o país da votação."
            })
        }

    } catch (error) {

        resp.status(400).json({
            error: "IP inválido."
        })
    }

}

const printVotes = async (req, resp) => {
    const file = JSON.parse(await fs.readFile('./database/votos.json'));
    resp.json(file.votos);
}

module.exports = {
    vote,
    printVotes,
}