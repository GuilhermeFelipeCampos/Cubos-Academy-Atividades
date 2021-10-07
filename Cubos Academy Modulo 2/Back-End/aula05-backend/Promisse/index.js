const fs = require('fs/promises');

fs.readFile("texto.txt")
    .then((data) => fs.writeFile("novoTexto.txt", data))
    .then(() => {
        console.log("Escrita completa");
    })
    .catch((err) => {
        console.log("Erro: ", err);
    });

// fs.readFile("texto.txt", (err, data) => {

//     if (err) {
//         console.log("Deu Erro!", err);
//     } else {
//         console.log("Leu com sucesso");
//         fs.writeFile("novoTexto1.txt", data, (err) => {
//             if (err) {
//                 console.log("Deu Erro na escrita do 1", err);
//             } else {
//                 console.log("Escreveu com sucesso o 1!");
//             }
//         });

//     }
// });

// const leituraDoArquivo = fs.readFile("texto.txt");

// leituraDoArquivo.then((data) => {
//     console.log("Terminei de ler:", data.toString());
// });
// leituraDoArquivo.catch((err) => {
//     console.log("erro:", err);
// });
// console.log(leituraDoArquivo);