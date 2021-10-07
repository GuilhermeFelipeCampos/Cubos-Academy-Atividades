const express = require('express');
const rota = require('./routers/routers');
const app = express();
app.use(express.json());

app.use(rota);

app.listen(8000, () => {
    console.log("Conexão Iniciada com Sucesso!");
})