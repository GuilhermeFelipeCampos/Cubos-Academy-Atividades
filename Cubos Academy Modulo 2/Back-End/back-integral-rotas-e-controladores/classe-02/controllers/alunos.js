const listaAlunos = require('../data/alunos');
const { validaAluno } = require('./validaAluno');
let novoId = listaAlunos.length;

function listaTodosAlunos(req, resp) {
    resp.status(200);
    resp.json(listaAlunos);
}
function consultaAluno(req, resp) {
    const aluno = listaAlunos.find((aluno) => aluno.id === Number(req.params.idAluno));
    if (!aluno) {
        resp.status(400);
        resp.json({ error: "Aluno Não encontrado na posição " + req.params.idAluno });
        return;
    }
    resp.status(200);
    resp.json(aluno);
}

function criarAluno(req, resp) {
    const erro = validaAluno(req.body);
    if (erro) {
        resp.status(400);
        resp.json({ erro });
        return;
    }

    novoId++;
    const novoAluno = {
        id: novoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: Number(req.body.idade),
        curso: req.body.curso,
    };
    listaAlunos.push(novoAluno);
    resp.status(201);
    resp.json("Created");

}
function editarAluno(req, resp) {
    const aluno = listaAlunos.find((aluno) => aluno.id === Number(req.params.idAluno));
    if (!aluno) {
        resp.status(400);
        resp.json({ error: "Aluno não encontrado na posição " + req.params.idAluno });
        return;
    }
    const erro = validaAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso
    });
    if (erro) {
        resp.status(400);
        resp.json({ erro });
        return;
    }
    if (req.body.nome !== undefined) {
        aluno.nome = req.body.nome;
    }
    if (req.body.sobrenome !== undefined) {
        aluno.sobrenome = req.body.sobrenome;
    }
    if (req.body.idade !== undefined) {
        aluno.idade = req.body.idade;
    }
    if (req.body.curso !== undefined) {
        aluno.curso = req.body.curso;
    }
    resp.status(201);
    resp.json({ mensagem: "Aluno alterado com sucesso" });


}

function substituirAluno(req, resp) {

    const erro = validaAluno(req.body);
    if (erro) {
        resp.status(400);
        resp.json({ erro });
        return;
    }
    if (req.body.id !== Number(req.params.idAluno)) {
        resp.status(400);
        resp.json({ error: "Id do aluno não está em conformidade o id " + req.params.idAluno });
        return;
    }
    const aluno = listaAlunos.find((aluno) => aluno.id === Number(req.params.idAluno));


    if (aluno) {

        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.idade = Number(req.body.idade);
        aluno.curso = req.body.curso;

        resp.status(201);
        resp.json({ mensagem: "Aluno alterado com sucesso" });
    } else {
        novoId++;
        const novoAluno = {
            id: novoId,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            idade: Number(req.body.idade),
            curso: req.body.curso,
        };
        listaAlunos.push(novoAluno);
        resp.status(201);
        resp.json("Created");
    }
}
function deletarAluno(req, resp) {
    const aluno = listaAlunos.find((aluno) => aluno.id === Number(req.params.idAluno));
    if (!aluno) {
        resp.status(400);
        resp.json({ error: "Aluno não encontrado na posição " + req.params.idAluno });
        return;
    }
    const index = listaAlunos.lastIndexOf(aluno);
    listaAlunos.splice(index, 1);
    resp.status(200);
    resp.json(aluno);
}
module.exports = {
    listaTodosAlunos,
    consultaAluno,
    criarAluno,
    editarAluno,
    substituirAluno,
    deletarAluno
}