const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const maiorQueVinte = pessoas.filter((x) => {
    if (x.idade > 20) {
        return ({
            nome: x.nome,
            idade: x.idade,
            profissao: x.profissao
        });
    } else {
        return console.log("Todas as pessoas dessa lista tem menos de 20 anos.");
    }
});

const jornalistaTrinta = pessoas.filter((x) => {
    if (x.profissao === "Jornalista" && x.idade > 30) {
        return ({
            nome: x.nome,
            idade: x.idade,
            profissao: x.profissao
        });

    } else {
        return console.log("Todas as pessoas dessa lista tem menos de 30 anos ou não são jornalistas.");
    }
});

const programJornal = pessoas.filter((x) => {
    if ((x.profissao === "Jornalistas" || x.profissao === "Programador") && x.idade < 30) {
        return ({
            nome: x.nome,
            idade: x.idade,
            profissao: x.profissao
        });
    } else {
        return console.log("Todas as pessoas dessa lista tem menos de 30 anos ou é Programadora e/ou Jornalista.");
    }
});

console.log(maiorQueVinte);
console.log(jornalistaTrinta);
console.log(programJornal);