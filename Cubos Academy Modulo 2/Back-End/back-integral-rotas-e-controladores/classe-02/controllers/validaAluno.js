const listaDeCursos = require('../data/cursos');

function validaAluno(aluno) {

    if (!aluno.nome) {
        return "O nome deverá ser informado";
    }
    if (!aluno.sobrenome) {
        return "O sobrenome deverá ser informado";
    }
    if (!aluno.idade) {
        return "A idade deverá ser informada";
    }
    if (!aluno.curso) {
        return "O curso deverá ser informado";
    }
    if (typeof aluno.nome !== "string") {
        return "O nome deverá ser preenchido com um texto";

    }
    if (typeof aluno.sobrenome !== "string") {
        return "O sobrenome deverá ser preenchido com um texto";

    }
    if (typeof aluno.idade !== "number") {
        return "A idade deverá ser preenchido com um numero";

    }
    if (typeof aluno.curso !== "string") {
        return "O curso deverá ser preenchido com um texto";

    }
    if (aluno.idade < 18) {
        return "A idade preenchida deve ser maior que 18 anos";

    }
    if (!listaDeCursos.includes(aluno.curso)) {
        return "O curso colocado é inválido";
    }
}

module.exports = {
    validaAluno,
};