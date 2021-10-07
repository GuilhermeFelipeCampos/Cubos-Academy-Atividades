const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};

const { nomeDaPessoa, idadeDaPessoa, ...infosAdicionais } = pessoa;

console.log(nomeDaPessoa);
console.log(idadeDaPessoa);
console.log(infosAdicionais);

