const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
const express = require('express');
const app = express();
let i = 0;
app.get("/", (req, resp) => {
    resp.send(`É a vez de ${jogadores[i]} jogar!`);
    if (i === jogadores.length - 1) {
        i = 0;
    } else {
        i++;
    }
});
app.listen(8000, function () {
    console.log("teste de servidor");
});

