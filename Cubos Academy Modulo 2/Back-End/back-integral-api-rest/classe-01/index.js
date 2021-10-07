const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

const express = require('express');
const app = express();
app.use(express.json());




app.listen(8000, () => {
    console.log("conexão inciada com sucesso!");
})

app.get('/convidados', (req, resp) => {

    if (req.query.nome) {
        convidados.forEach(convidado => convidado === req.query.nome ?
            resp.json("Convidado presente.") : resp.json("O convidado buscado não está presente na lista."))
    } else {

        resp.json(convidados);
    }

});

app.post('/convidados', (req, resp) => {
    const nomeConvidado = convidados.find((convidado) => convidado === req.body.nome);

    if (nomeConvidado !== req.body.nome) {
        convidados.push(req.body.nome);
        resp.json("Convidado adicionado.");
    } else {
        resp.json("O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.");
    }

});

app.delete('/convidados/:nome', (req, resp) => {
    const nomeConvidado = convidados.find((convidado) => convidado === req.params.nome);
    if (nomeConvidado !== req.params.nome) {
        resp.json("O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.");
    } else {
        const posicao = convidados.indexOf(nomeConvidado);
        convidados.splice(posicao, 1);
        resp.json("Convidado removido.");

    }
});


