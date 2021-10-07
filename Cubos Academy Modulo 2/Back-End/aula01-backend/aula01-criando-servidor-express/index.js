const express = require('express');
const app = express();

// app.get("/livros/1", (req, res) => {
//     res.send("livro um");
// });
// app.get("/livros/2", (req, res) => {
//     res.send("livro dois");
// });
// app.get("/livros/3", (req, res) => {
//     res.send("livro três");
// });

app.get("/livros/:numero", (req, res) => {
    console.log(req.params);
    res.send("Teste");
})

app.listen(8000);