const express = require('express');
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

app.get('/livros', (req, resp) => {
    resp.json(livros);
});

app.get('/livros/:idLivro', (req, resp) => {

    const livro = livros.find((livro) => livro.id === Number(req.params.idLivro))
    if (livro) {
        resp.json(livro);
    } else if (!Number(req.params.idLivro)) {
        resp.json("Não existe livro a ser substituído para o ID informado.");
    } else {
        resp.json("O valor do parâmetro ID da URL não é um número válido.");

    }
});

let proximoId = 3;
app.post('/livros', (req, resp) => {

    const paginas = Number(req.body.numPaginas);

    const novoLivro = {
        id: proximoId,
        titulo: (req.body.titulo),
        autor: (req.body.autor),
        ano: (req.body.ano),
        numPaginas: paginas,
    }
    proximoId++;
    livros.push(novoLivro);
    resp.json({ "mensagem": "livro Adicionado com Sucesso!" });
});

app.put('/livros/:idLivro', (req, resp) => {
    const livro = livros.find((livro) => livro.id === Number(req.params.idLivro));
    if (livro) {
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = Number(req.body.ano);
        livro.numPaginas = Number(req.body.numPaginas);
        resp.json({ "mensagem": "Livro substituído." });
    } else {
        resp.json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }
});

app.patch('/livros/:idLivro', (req, resp) => {
    const livro = livros.find((livro) => livro.id === Number(req.params.idLivro));
    if (livro) {
        livro.titulo = req.body.titulo ? req.body.titulo : livro.titulo;
        livro.autor = req.body.autor ? req.body.autor : livro.autor;
        livro.ano = req.body.ano ? Number(req.body.ano) : livro.ano;
        livro.numPaginas = req.body.numPaginas ? Number(req.body.numPaginas) : livro.numPaginas;
        resp.json({ "mensagem": "Livro alterado." });
    } else {
        resp.json({ "mensagem": "Não existe livro a ser alterado para o ID informado." });
    }
});

app.delete('/livro/:idLivro', (req, resp) => {
    const livro = livros.find((livro) => livro.id === Number(req.params.idLivro));
    if (livro) {
        const indexLivro = livros.lastIndexOf(livro);
        livros.splice(indexLivro, 1);
        resp.json({ "mensagem": "Livro removido." });
    } else {
        resp.json({ "mensagem": "Não existe livro a ser removido para o ID informado." });
    }
})




app.listen(8000, () => {
    console.log("conexão iniciada com sucesso!");
});