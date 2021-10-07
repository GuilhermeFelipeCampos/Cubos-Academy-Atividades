//const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const fs = require('fs');
const msg = ("Estou aprendendo JavaScript na Cubos Academy");
fs.writeFile("./novoarquivo.txt", msg, () => {
    console.log("Estou aprendendo JavaScript na Cubos Academy");
})