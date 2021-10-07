const express = require("express");
const app = express();

let segundo = 0;
let minuto = 0;
let cornometro = setInterval(() => {
    if (segundo < 60) {
        segundo++;
    } else {
        if (segundo === 60) {
            minuto++;
            segundo = 0;
        }
    }
}, 1000);


app.get("/", (req, resp) => {

    if (segundo < 60) {
        resp.send(`Tempo atual do Cronômetro: ${minuto <= 9 ? "0" + minuto.toString() : minuto.toString()} minuto${minuto <= 1 ? "" : "s"} e ${segundo <= 9 ? `0${segundo.toString()}` : segundo.toString()} segundo${segundo === 1 ? "" : "s"}.`);
    } else {
        resp.send(`Tempo atual do Cronômetro: ${minuto <= 9 ? "0" + minuto.toString() : minuto.toString()} minuto${minuto <= 1 ? "" : "s"} e ${segundo <= 9 ? `0${segundo.toString()}` : segundo.toString()} segundo${segundo === 1 ? "" : "s"}.`);
    }

});

app.get("/:status", (req, resp) => {

    if (req.params.status === "iniciar") {
        segundo = 0;
        minuto = 0;
        cornometro = setInterval(() => {
            if (segundo < 60) {
                segundo++;
            } else {
                if (segundo === 60) {
                    minuto++;
                    segundo = 0;
                }
            }
        }, 1000);
        resp.send("Cronômetro iniciado!");

    } else if (req.params.status === "pausar") {
        clearInterval(cornometro);
        resp.send("Cronômetro pausado!");

    } else if (req.params.status === "continuar") {
        cornometro = setInterval(() => {
            if (segundo < 60) {
                segundo++;
            } else {
                if (segundo === 60) {
                    minuto++;
                    segundo = 0;
                }
            }
        }, 1000);
        resp.send("Cronômetro continuando!");

    } else if (req.params.status === "zerar") {
        clearInterval(cornometro);
        segundo = 0;
        minuto = 0;
        resp.send("Cronômetro zerado!");
    }

});


app.listen(8000, () => {
    console.log("conexão iniciada com sucesso!");
})


