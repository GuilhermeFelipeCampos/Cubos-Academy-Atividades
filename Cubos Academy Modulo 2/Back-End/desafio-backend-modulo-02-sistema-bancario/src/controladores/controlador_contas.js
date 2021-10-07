

const { validaSenha, validaNovaConta, validaAtualizarConta, validaExcluirConta } = require('../validadores/validacao_contas');



const listarContas = async (req, resp) => {

    const validador = validaSenha(req.query.senha_banco);
    const { status, mensagem } = validador;
    resp.status(status).json(mensagem);

}

const criarConta = async (req, resp) => {

    const validador = validaNovaConta(req.body);
    const { status, mensagem } = validador;
    resp.status(status).json(mensagem);

}

const atualizarUsuarioConta = async (req, resp) => {
    const validador = validaAtualizarConta(req.params.numeroConta, req.body);
    const { status, mensagem } = validador;
    resp.status(status).json(mensagem);

}

const excluirConta = async (req, resp) => {

    const validador = validaExcluirConta(req.params.numeroConta);
    const { status, mensagem } = validador;
    resp.status(status).json(mensagem);
}


module.exports = {
    listarContas,
    criarConta,
    atualizarUsuarioConta,
    excluirConta
}