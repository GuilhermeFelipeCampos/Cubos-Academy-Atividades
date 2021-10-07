const fs = require('fs');

fs.readFile("texto.txt", (err, data) => {
    if (err) {
        console.log("Deu Erro!", err);
    } else {
        console.log("Leu com sucesso");
        fs.writeFile("novoTexto1.txt", data, (err) => {
            if (err) {
                console.log("Deu Erro na escrita do 1", err);
            } else {
                console.log("Escreveu com sucesso o 1!");
            }
        });
        fs.writeFile("novoTexto2.txt", data, (err) => {
            if (err) {
                console.log("Deu Erro na escrita do 2", err);
            } else {
                console.log("Escreveu com sucesso o 2!");
            }
        });
    }
});