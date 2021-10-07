const express = require('express');
const listaImoveis = require('./Data/imoveis');
const router = require('./router/router');

const app = express();
app.use(express.json());
app.use(router);


app.listen(8000, () => {
    console.log("Conexão iniciada com sucesso!");
});