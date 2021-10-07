const conexao = require('../conexao');

const listarEmprestimos = async(req,res) => {

    try {
        const { rows: emprestimo } = await conexao.query(`select e.id ,u.nome,
        u.telefone, u.email, l.nome as livro, e.status from usuarios u  
        join emprestimos e on e.usuario_id = u.id
        join livros l on e.livro_id = l.id;`);

    
        return res.status(200).json(emprestimo);


    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const consultarEmprestimo = async (req,res) => {

    const { id } = req.params;
    try {
        const emprestimo = await conexao.query(`select e.id ,u.nome,u.telefone,
         u.email, l.nome as livro, e.status from usuarios u  
        join emprestimos e on e.usuario_id = u.id
        join livros l on e.livro_id = l.id where e.id = $1;`, [id]);

        if (emprestimo.rowCount === 0) {
            return res.status(404).json('Empréstimo não encontrado');
        }

        return res.status(200).json(emprestimo.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarEmprestimo = async (req,res) => {

        const {usuario_id, livro_id, status} = req.body;
        console.log(usuario_id)
    try {
        
        const existeUsuario = await conexao.query('select * from usuarios where id = $1', [usuario_id]);
        if(existeUsuario.rowCount === 0){

            return res.status(400).json('Usuário não existe na nossa base de dados');
        }
        const existeLivro = await conexao.query('select * from livros where id = $1', [livro_id]);
        if(existeLivro.rowCount === 0){

            return res.status(400).json('Livro não existe na nossa base de dados');
        }
        const {rows, rowCount} = await conexao.query('select * from emprestimos where livro_id = $1',[livro_id]);
       
        if(rowCount !== 0 && rows.status === "pendente"){
            return res.status(400).json('Livro se encontra alugado');
        }
        

        const query = `insert into emprestimos (usuario_id, livro_id, status) values
         ($1, $2, $3)`;

        const cadastroEmprestimo = await conexao.query(query, [usuario_id, livro_id, status]);

        if (cadastroEmprestimo.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar empréstimo');
        }

        return res.status(200).json('Empréstimo cadastrado com sucesso.');
    }catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarEmprestimo = async (req, res) => {

    const { usuario_id, livro_id,status} = req.body;
    try {
       
              
       const consultaEmprestimo = await conexao.query('select * from emprestimos where livro_id = $1',[livro_id]);
       
        if(consultaEmprestimo.rowCount === 0){

            return res.status(400).json('Empréstimo não existe na nossa base de dados');
        }
        

        const query = `update emprestimos set  status= $1 where usuario_id = $2`;

        const atualizaEmprestimo = await conexao.query(query, [status , usuario_id]);

        if (atualizaEmprestimo.rowCount === 0) {
            return res.status(400).json('Não foi possivel atualizar o empréstimo');
        }

        return res.status(200).json('Empréstimo atualizado com sucesso.');
    }catch (error) {
        return res.status(400).json(error.message);
    }
}
const excluirEmprestimo = async (req,res) => {

    const { id } = req.params;
    try{
    const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);

    if (emprestimo.rowCount === 0) {
        return res.status(404).json('Empréstimo não encontrado');
    }
    const {rows} = emprestimo;
    console.log(rows[0].status)
    if(rows[0].status === "pendente"){
        return res.status(404).json("Empréstimo não pode ser excluído pois seu status está 'pendente'");
    }

    const query = 'delete from emprestimos where id = $1';
    const emprestimoExcluido = await conexao.query(query, [id]);

    if (emprestimoExcluido.rowCount === 0) {
        return res.status(404).json('Não foi possível excluir o emprestimo');
    }

    return res.status(200).json('Empréstimo foi excluido com sucesso.');
} catch (error) {
    return res.status(400).json(error.message);
}
}


module.exports = {
    listarEmprestimos,
    consultarEmprestimo,
    cadastrarEmprestimo,
    atualizarEmprestimo,
    excluirEmprestimo
}