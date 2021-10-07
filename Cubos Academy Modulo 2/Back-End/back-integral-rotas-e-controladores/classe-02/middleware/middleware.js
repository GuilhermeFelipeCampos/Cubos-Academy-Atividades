function validaRequisicao(req, resp, next) {

    if (req.method === "GET" || req.query.senha === "cubos123") {
        next();
    } else {
        resp.status(401);
        resp.json({ error: "Acesso não autorizado!" });
    }
}

module.exports = { validaRequisicao };
