const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]
let cont = 0;
let i = 0;
for (let jogador of jogadores) {

    if (jogador.jogada === 1) {
        cont++;
    } else {
        i++;
    }
}
if (cont === 1) {
    for (let nome of jogadores) {
        if (nome.jogada === 1) {
            console.log(nome.nome);
        }
    }
} else if (i === 1) {
    for (let nome of jogadores) {
        if (nome.jogada === 0) {
            console.log(nome.nome);
        }
    }
}