
const { banco, contas } = require("../bancodedados");


const verificaStatus = (confirmaStatus) => {

    if (confirmaStatus === 1) {
        return 200;

    } else if (confirmaStatus === 2) {
        return 201;

    } else if (confirmaStatus === 3) {
        return 400;

    } else if (confirmaStatus === 4) {
        return 404;

    }

}


const validaSenha = (senha) => {

    if (!senha) {

        return {
            "status": verificaStatus(4),
            "mensagem": "Senha não encontrada como parâmetro da URL"
        };

    } else {

        if (banco.senha !== senha) {

            return {
                status: verificaStatus(3),
                "mensagem": "Senha Inválida!!"
            };

        } else {

            return {
                "status": verificaStatus(1),
                "mensagem": contas
            };
        }

    }

}

let novaConta = 1;
const validaNovaConta = (conta) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = conta;

    if (novaConta > 1) {
        const validaCpf = contas.find((item) => item.usuario.cpf === cpf);
        const validaEmail = contas.find((item) => item.usuario.email === email);

        if (validaCpf) {
            return {
                status: verificaStatus(3),
                "mensagem": "CPF já cadastrado!!!"
            };
        }
        if (validaEmail) {
            return {
                status: verificaStatus(3),
                "mensagem": "Email já cadastrado!!!"
            };
        }


    } else {
        if (!nome) {
            return {
                status: verificaStatus(3),
                "mensagem": "O campo Nome precisa ser informado em um formato correto!"
            };

        }
        if (typeof nome !== "string") {
            return {
                status: verificaStatus(3),
                "mensagem": "Usuário precisa informar um nome em um formato de texto!"
            };

        }
        if (!nome.includes(" ")) {
            return {
                status: verificaStatus(3),
                "mensagem": "Usuário precisa informar um nome completo"
            };
        }
        if (!cpf || cpf.length !== 11) {
            return {
                status: verificaStatus(3),
                "mensagem": "O campo CPF precisa ser Informado corretamente!"
            };
        }
        if (!data_nascimento) {
            return {
                status: verificaStatus(3),
                "mensagem": "O campo de data de nascimento precisa ser Informado!"
            };

        }

        if (!telefone) {
            return {
                status: verificaStatus(3),
                "mensagem": "O campo de telefone precisa ser Informado!"
            };

        }
        if (telefone.length !== 11) {
            return {
                status: verificaStatus(3),
                "mensagem": "O telefone precisa ser informado com o DDD!"
            };
        }
        if (!email) {
            return {
                status: verificaStatus(3),
                "mensagem": "O campo email precisa ser Informado! ou um email válido!"
            };
        }
        if (!email.includes("@")) {
            return {
                status: verificaStatus(3),
                "mensagem": "É necessario que informe um e-mail válido!"
            };
        }
        if (!senha) {
            return {
                status: verificaStatus(3),
                "mensagem": "Uma senha precisa ser informada!"
            };
        }

    }

    const addConta = {
        numero: novaConta,
        saldo: 0,
        usuario: {
            nome: nome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            telefone: telefone,
            email: email,
            senha: senha,
        }
    }

    contas.push(addConta);
    novaConta++;
    return { status: verificaStatus(2), "mensagem": "Usuário Criado com Sucesso!" };

}

const validaAtualizarConta = (numeroConta, conta) => {

    const editaConta = contas.find((item) => item.numero === Number(numeroConta));
    const { nome, cpf, data_nascimento, telefone, email, senha } = conta;
    if (!editaConta) {

        return {
            status: verificaStatus(4),
            "mensagem": "O número da conta precisa ser informado como parâmetro da URL!"
        };

    } else {

        if (editaConta.usuario.nome !== nome) {
            editaConta.usuario.nome = nome;
        }
        if (editaConta.usuario.cpf !== cpf) {
            const validaCpf = contas.find((item) => item.usuario.cpf === cpf);
            if (validaCpf) {
                return {
                    status: verificaStatus(3),
                    "mensagem": "CPF já cadastrado!!!"
                };
            } else {
                editaConta.usuario.cpf = cpf;
            }
        }
        if (editaConta.usuario.data_nascimento !== data_nascimento) {
            editaConta.usuario.data_nascimento = data_nascimento;
        }
        if (editaConta.usuario.telefone !== telefone) {
            editaConta.usuario.telefone = telefone;
        }
        if (editaConta.usuario.email !== email) {
            const validaEmail = contas.find((item) => item.usuario.email === email);
            if (validaEmail) {
                return {
                    status: verificaStatus(3),
                    "mensagem": "Email já cadastrado!!!"
                };
            } else {
                editaConta.usuario.email = email;
            }
        }
        if (editaConta.usuario.senha !== senha) {
            editaConta.usuario.senha = senha;
        }


        return { status: verificaStatus(2), "mensagem": "Usuário Atualizado com Sucesso" };
    }

}

const validaExcluirConta = (numeroConta) => {
    const numeroDaConta = Number(numeroDaConta)
    const conta = contas.find((conta) => conta.numero === numeroDaConta);

    if (conta) {
        if (conta.saldo !== 0) {
            return {
                status: verificaStatus(3),
                "mensagem": "Não é possível excluir conta pois, existe saldo em conta "
            };
        }
        const index = contas.lastIndexOf(conta);
        contas.splice(index, 1);
        return {
            status: verificaStatus(1),
            "mensagem": "Conta excluida com sucesso!"
        };
    } else {
        return {
            status: verificaStatus(4),
            "mensagem": "Não existe conta para o número informado"
        };
    }
}


module.exports = {
    validaSenha,
    verificaStatus,
    validaNovaConta,
    validaAtualizarConta,
    validaExcluirConta,
}