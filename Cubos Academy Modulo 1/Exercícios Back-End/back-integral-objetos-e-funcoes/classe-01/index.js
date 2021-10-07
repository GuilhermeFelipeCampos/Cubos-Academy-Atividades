function corrigirProva(prova) {
    let ponto = 0;
    for (let avaliar of prova.questoes) {

        if (avaliar.resposta === avaliar.correta) {

            ponto++;
        }
    }

    return ponto;
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

console.log(`O aluno(a) ${prova.aluno} acertou ${corrigirProva(prova)} questões e obteve nota ${(corrigirProva(prova) * 2)}`);