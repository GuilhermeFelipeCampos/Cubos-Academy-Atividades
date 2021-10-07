const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

let filtro = usuários.filter(age => age.idade >= 18 && age.idade <= 65);
console.log(filtro);

let estaHabilitado = filtro.every(habilitacao => habilitacao.habilitado === true)
estaHabilitado ?
    console.log("todos passaram no teste")
    : console.log("todos precisam estar habilitados");