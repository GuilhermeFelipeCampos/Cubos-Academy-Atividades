const { validaDeposito, validaSaque, validaTranferencia, validaSaldo, validaExtrato } = require("../validadores/validacao_trasacoes")

const depositar = async (req, resp) => {

    const validador = validaDeposito(req.body);

    const { status, mensagem } = validador;

    resp.status(status).json(mensagem);

}

const sacar = async (req, resp) => {
    const validador = validaSaque(req.body);

    const { status, mensagem } = validador;

    resp.status(status).json(mensagem);
}

const transferir = async (req, resp) => {

    const validador = validaTranferencia(req.body);

    const { status, mensagem } = validador;

    resp.status(status).json(mensagem);
}

const saldo = (req, resp) => {
    const validador = validaSaldo(req.query);

    const { status, mensagem } = validador;

    resp.status(status).json(mensagem);
}
const extrato = (req, resp) => {
    const validador = validaExtrato(req.query);

    const { status, mensagem } = validador;

    resp.status(status).json(mensagem);
}

module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato,
}
