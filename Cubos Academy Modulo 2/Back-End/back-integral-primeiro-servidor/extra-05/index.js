const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');
const app = express();


function removerJogador(numero) {
    if (numero <= jogadores.length) {
        jogadores.splice(numero, 1);
        return jogadores;
    } else {
        return "Não existe jogador no índice " + numero.toString() + " para ser removido.";
    }
}

function adicionarJogador(numero, jogador) {
    let nomeTratado = "";
    if (jogador.charAt(0) !== jogador.charAt(0).toUpperCase()) {
        nomeTratado = jogador.charAt(0).toUpperCase() + jogador.substr(1);
    } else {
        nomeTratado = jogador;
    }

    if (numero == 0 || numero) {
        let i = parseInt(numero, 10);
        jogadores.splice(i, 0, nomeTratado);

    } else {
        jogadores.push(nomeTratado);
    }

    return jogadores;
}

let i = 0;
app.get("/", (req, resp) => {
    resp.send(`É a vez de ${jogadores[i]} jogar!`);
    if (i === jogadores.length - 1) {
        i = 0;
    } else {
        i++;
    }
});

app.get("/:status", (req, resp) => {
    const indice = parseInt(req.query.indice, 10);
    if (req.params.status === "remover") {
        resp.send(removerJogador(indice));
    } else if (req.params.status === "adicionar") {
        let posicao = parseInt(req.query.indice, 10);
        const nome = req.query.nome;
        if (posicao <= 0 || posicao >= jogadores.length) {
            resp.send("O índice informado " + posicao.toString() + " não existe no array. Novo jogador não adicionado.");
        } else {
            resp.send(adicionarJogador(posicao, nome));
        }

        resp.send(posicao);
    }
})

app.listen(8000, () => {
    console.log("Conexão inicializada!!");
})