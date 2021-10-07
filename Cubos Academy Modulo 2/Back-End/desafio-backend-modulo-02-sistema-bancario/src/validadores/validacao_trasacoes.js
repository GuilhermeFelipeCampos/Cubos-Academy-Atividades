const { format } = require("date-fns");
const { contas, saques, depositos, transferencias } = require("../bancodedados");
const { verificaStatus } = require("./validacao_contas");

const validaDeposito = (dados) => {

    if (!dados.numero) {
        return {
            status: verificaStatus(4),
            "mensagem": "é necessário informar o numero da conta !"
        };
    }
    if (!dados.saldo) {
        return {
            status: verificaStatus(4),
            "mensagem": "é necessário informar um saldo !"
        };
    } else {
        const conta = contas.find((item) => item.numero === dados.numero);

        if (dados.saldo <= 0) {

            return {
                status: verificaStatus(3),
                "mensagem": "O valor do deposito deverá sempre ser maior que zero!"
            };
        } else {
            conta.saldo += dados.saldo;
            depositos.push({
                data: format(new Date(), "yyyy-MM-dd k:m:s"),
                numero_conta: dados.numero,
                valor: dados.saldo
            });

            return {
                status: verificaStatus(1),
                "mensagem": "Depósito efetuado com sucesso!"
            };
        }
    }
}

const validaSaque = (conta) => {

    const { numero, senha, saque } = conta;
    if (!numero) {
        return {
            status: verificaStatus(4),
            "mensagem": "Numero da conta não foi informado!"
        };
    }
    if (!senha) {
        return {
            status: verificaStatus(4),
            "mensagem": "A senha da conta não foi informada!"
        };
    }
    if (!saque) {
        return {
            status: verificaStatus(4),
            "mensagem": "O valor do saque precisa ser informado!"
        };
    }

    const contaExiste = contas.find((item) => item.numero === numero);
    if (!conta) {
        return {
            status: verificaStatus(3),
            "mensagem": "Essa conta não existe! Informe um numero de conta válido!"
        };
    } else {

        if (contaExiste.usuario.senha !== senha) {
            return {
                status: verificaStatus(3),
                "mensagem": "Senha Incorreta"
            };
        } else {
            if (contaExiste.saldo >= saque) {
                contaExiste.saldo = contaExiste.saldo - saque;
                saques.push({
                    data: format(new Date(), "yyyy-MM-dd k:m:s"),
                    numero_conta: numero,
                    valor: saque
                });

                return {
                    status: verificaStatus(2),
                    "mensagem": "Saque efetuado com sucesso!!"
                };

            } else {
                return {
                    status: verificaStatus(3),
                    "mensagem": "Saque indisponível, seu saldo está abaixo do valor do saque!"
                };
            }
        }
    }

}
const validaTranferencia = (conta) => {

    const { contaOrigem, contaDestino, senha, valor } = conta;
    if (!contaOrigem) {
        return {
            status: verificaStatus(4),
            "mensagem": "A Conta de Origem Precisa ser Informada!"
        };
    }
    if (!contaDestino) {
        return {
            status: verificaStatus(4),
            "mensagem": "A Conta de Destino Precisa ser Informada!"
        };
    }
    if (!senha) {
        return {
            status: verificaStatus(4),
            "mensagem": "A Senha Precisa ser Informada!"
        };
    }
    if (!valor) {
        return {
            status: verificaStatus(4),
            "mensagem": "O Valor da Transferência precisa ser Informado"
        };
    }
    const contaEnviarValor = contas.find((item) => item.numero === contaOrigem);
    if (!contaEnviarValor) {
        return {
            status: verificaStatus(4),
            "mensagem": "Essa conta não exite!!!"
        };
    } else {
        const contaRecebeValor = contas.find((item) => item.numero === contaDestino);
        if (!contaRecebeValor) {
            return {
                status: verificaStatus(4),
                "mensagem": "Essa conta não exite!!!"
            };
        } else {
            if (contaEnviarValor.usuario.senha !== senha) {
                return {
                    status: verificaStatus(3),
                    "mensagem": "Senha Incorreta"
                };
            } else {
                if (contaEnviarValor.saldo >= valor) {
                    contaEnviarValor.saldo = contaEnviarValor.saldo - valor;
                    contaRecebeValor.saldo += valor;
                    transferencias.push({
                        data: format(new Date(), "yyyy-MM-dd k:m:s"),
                        numero_conta_origem: contaOrigem,
                        numero_conta_destino: contaDestino,
                        valor: valor,
                    });

                    return {
                        status: verificaStatus(2),
                        "mensagem": "Transferência Realizada  com sucesso!!"
                    };

                } else {
                    return {
                        status: verificaStatus(3),
                        "mensagem": "Valor da transferência excede o seu saldo em conta"
                    };
                }
            }
        }
    }

}
const validaSaldo = (contaSaldo) => {
    const { numero_conta, senha } = contaSaldo;
    if (!numero_conta) {
        return {
            status: verificaStatus(3),
            "mensagem": "Numero da conta precisa ser passado como parâmetro da URL"
        };
    }
    if (!senha) {
        return {
            status: verificaStatus(3),
            "mensagem": "A senha precisa ser passada como parâmetro da URL"
        };
    }
    const conta = contas.find((item) => item.numero === Number(numero_conta))
    if (!conta) {
        return {
            status: verificaStatus(3),
            "mensagem": "A conta informada não existe"
        };
    } else {
        if (conta.usuario.senha !== senha) {
            return {
                status: verificaStatus(3),
                "mensagem": "Senha Inválida!"
            };
        } else {
            return {
                status: verificaStatus(1),
                "mensagem": { valor: conta.saldo }
            };
        }
    }
}
const validaExtrato = (extrato) => {
    const { numero_conta, senha } = extrato;
    if (!numero_conta) {
        return {
            status: verificaStatus(3),
            "mensagem": "Numero da conta precisa ser passado como parâmetro da URL"
        };
    }
    if (!senha) {
        return {
            status: verificaStatus(3),
            "mensagem": "A senha precisa ser passada como parâmetro da URL"
        };
    }
    const conta = contas.find((item) => item.numero === Number(numero_conta))
    if (!conta) {
        return {
            status: verificaStatus(3),
            "mensagem": "A conta informada não existe"
        };
    } else {
        if (conta.usuario.senha !== senha) {
            return {
                status: verificaStatus(3),
                "mensagem": "Senha Inválida!"
            };
        } else {
            const depositoConta = depositos.filter((item) => item.numero_conta === conta.numero);
            const saqueConta = saques.filter((item) => item.numero_conta === conta.numero);
            const transferenciaEnviadaConta = transferencias.filter((item) => item.numero_conta_origem === conta.numero);
            const transferenciaRecebidaConta = transferencias.filter((item) => item.numero_conta_destino === conta.numero);

            return {
                status: verificaStatus(1),
                "mensagem": {
                    "depósitos": depositoConta,
                    "saques": saqueConta,
                    "transferencia_Enviadas": transferenciaEnviadaConta,
                    "transferecia_Recebidas": transferenciaRecebidaConta,
                }
            };


        }
    }
}
module.exports = {
    validaDeposito,
    validaSaque,
    validaTranferencia,
    validaSaldo,
    validaExtrato,
}