const { validaUsuario } = require("../validacoes/valida_usuario");
const conexao = require('../conexao');


const listarUsuarios = async(req, res) => {

    try {
        const { rows: usuarios } = await conexao.query('select * from usuarios');
        
        for (const usuario of usuarios) {
            const { rows: emprestimos } = await conexao.query('select * from emprestimos where usuario_id = $1', [usuario.id]);
            usuario.emprestimos = emprestimos;
        }

        return res.status(200).json(usuarios);


    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const obterUsuario = async(req, res) => {

    const { id } = req.params;
    try {
        const {rows : usuario} = await conexao.query('select * from usuarios where id = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('Usuario não encontrado');
        }
        for (const user of usuario) {
            const { rows: emprestimos } = await conexao.query('select * from emprestimos where usuario_id = $1', [user.id]);
            user.emprestimos = emprestimos;
        }
        
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const cadastrarUsuario = async(req, res) => {
    
    try {
        const usuario = validaUsuario(req.body);
        const {nome, idade, email, telefone, cpf, mensagem} = usuario;
        console.log(mensagem)
        if(mensagem !== undefined){
            return res.status(400).json(mensagem);
        }
        
        const existeUsuario = await conexao.query('select * from usuarios where cpf = $1', [cpf]);
        
        if(existeUsuario.rowCount !== 0){

            return res.status(400).json('Usuário já cadastrado na nossa base de dados');
        }
    
        const query = `insert into usuarios (nome, idade, email, telefone, cpf) values
         ($1, $2, $3, $4, $5)`;

        const { rowCount } = await conexao.query(query, [nome, idade, email, telefone, cpf]);

        if (rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar usuário');
        }

        return res.status(200).json('Usuário cadastrado com sucesso.');
    }catch (error) {
        return res.status(400).json(error.message);
    }
}
const atualizarUsuario = async(req, res) => {

    try {
        const usuario = validaUsuario(req.body);
        const { id } = req.params;
        const {nome, idade, email, telefone, cpf, mensagem} = usuario;
        if(mensagem !== ""){
            return res.status(400).json(mensagem);
        }
        
        const existeUsuario = await conexao.query('select * from usuarios where id = $1', [id]);
        
        if(existeUsuario.rowCount === 0){

            return res.status(400).json('Usuário já cadastrado na nossa base de dados');
        }
    
        const query = `update usuarios set nome = $1, idade = $2, email= $3,
        telefone = $4, cpf = $5 where id = $6`;

        const { rowCount } = await conexao.query(query, [nome, idade, email, telefone, cpf,id]);

        if (rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar usuário');
        }

        return res.status(200).json('Usuário cadastrado com sucesso.');
    }catch (error) {
        return res.status(400).json(error.message);
    }


}
const excluirUsuario = async(req, res) => {

    const { id } = req.params;

    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('Usuário não encontrado');
        }

        const query = 'delete from usuarios where id = $1';
        const usuarioExcluido = await conexao.query(query, [id]);

        if (usuarioExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o usuario');
        }

        return res.status(200).json('Usuaário foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario,
}
