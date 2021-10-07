const express = require('express');
const { depositar, sacar, transferir, saldo, extrato } = require('../controladores/contolador_tansacoes');
const { listarContas, criarConta, atualizarUsuarioConta, excluirConta } = require('../controladores/controlador_contas');

const rota = express();


rota.get('/contas', listarContas);
rota.post('/contas', criarConta);
rota.put('/contas/:numeroConta/usuario', atualizarUsuarioConta);
rota.delete('/contas/:numeroConta', excluirConta);

rota.post('/contas/depositar', depositar);
rota.post('/contas/sacar', sacar);
rota.post('/contas/transferir', transferir);
rota.get('/contas/saldo', saldo);
rota.get('/conta/extrato', extrato);


module.exports = rota;