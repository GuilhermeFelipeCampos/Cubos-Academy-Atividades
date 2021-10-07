const express = require('express');
const app = express();

app.get("/calculadora/:operacao", (req, resp) => {

    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (req.params.operacao === "somar") {
        resp.send((num1 + num2).toString());
    } else if (req.params.operacao === "subtrair") {
        resp.send((num1 - num2).toString());
    } else if (req.params.operacao === "multiplicar") {
        resp.send((num1 * num2).toString());
    } else if (req.params.operacao === "dividir") {
        resp.send((num1 / num2).toString());
    } else {
        resp.send("Não foi possível fazer a operacão!!" + console.error(400));
    }

});
app.listen(8000, () => {
    console.log("Conexão Aceita");
});