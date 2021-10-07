//express axios promise

const express = require('express');
const axios = require('axios');


const app = express();

app.get('/descrever/:pacote', (req, resp) => {
    const pacote = req.params.pacote;
    const response = await axios.get(`https://registry.npmjs.com/${pacote}`);
    resp.json({
        descricao: response.data.description,
    });


});

app.listen(8000, () => {
    console.log('conexão iniciada com sucesso!!!');
})