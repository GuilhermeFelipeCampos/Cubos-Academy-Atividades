
const express = require('express');
const router = require('./router/router');
const { validaRequisicao } = require('./middleware/middleware');
const app = express();


app.use(express.json());
app.use(validaRequisicao);

app.use(router);
app.listen(8000, () => {
    console.log("conexão iniciada com sucesso!");
})