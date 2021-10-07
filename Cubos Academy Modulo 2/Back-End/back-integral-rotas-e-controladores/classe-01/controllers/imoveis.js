
const imoveis = require("../data/imoveis");

function listaTodosImoveis(req, resp) {

    resp.json(imoveis);
}

function listaImovel(req, resp) {
    const imovel = imoveis.find((imovel) => imovel.id === Number(req.params.idImovel));

    if (!imovel) {
        resp.status(404);
        resp.json({ error: "Imóvel não encontrado!" });
        return;
    }

    resp.json(imovel);
}

module.exports = {
    listaTodosImoveis,
    listaImovel
};