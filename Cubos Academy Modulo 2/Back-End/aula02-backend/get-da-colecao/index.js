const express = require('express');

const app = express();
app.use(express.json());

const listaDeIntrutores = [
    {
        id: 1,
        nome: "Júnior",
        idade: 29,
        areaDeAtuacao: "Lógica",
    },
    {
        id: 2,
        nome: "Dina",
        idade: 19,
        areaDeAtuacao: "Back-end",
    },
    {
        id: 3,
        nome: "Guido Cerqueira",
        idade: 30,
        areaDeAtuacao: "Full-Stack",
    },
    {
        id: 4,
        nome: "Victor Magalhães",
        idade: 28,
        areaDeAtuacao: "Front-end",
    },
];
//Requisição GET <- ok
app.get("/instrutores", (req, resp) => {

    resp.json(listaDeIntrutores);

});
app.get("/instrutores/:idConsultado", (req, resp) => {
    const instrutor = listaDeIntrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    resp.json(instrutor);
});

// Requisição POST <- ok
let proximoId = 5;
app.post("/instrutores", (req, resp) => {


    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao,
    };

    listaDeIntrutores.push(novoInstrutor);
    proximoId += 1;
    resp.json(novoInstrutor);

});
//requisição PACTH <- ok
app.patch("/instrutores/:idConsultado", (req, resp) => {
    const instrutor = listaDeIntrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    if (req.body.nome !== undefined) {
        instrutor.nome = req.body.nome;
    }
    if (req.body.idade !== undefined) {
        instrutor.idade = req.body.idade;
    }
    if (req.body.areaDeAtuacao !== undefined) {
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }

    resp.json(instrutor);

});
//requisição PUT <- ok
app.put("/instrutores/:idConsultado", (req, resp) => {
    const instrutor = listaDeIntrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    if (instrutor) {
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        resp.json(instrutor);

    } else {
        const novoInstrutor = req.body;
        listaDeIntrutores.push(novoInstrutor);
        resp.json(instrutor);
    }
})
//requisição DELETE <- ok
app.delete("/instrutores/:idConsultado", (req, resp) => {
    const instrutor = listaDeIntrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    const indice = listaDeIntrutores.indexOf(instrutor);
    listaDeIntrutores.splice(indice, 1);
    resp.json(instrutor);
});



app.listen(8000, () => {
    console.log("conexão iniciada com sucesso");
});