const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let relogio = 0;
function rodada() {
    if (relogio === 5) {
        console.log("Rodada Terminou!");
        clearInterval(intervalo);
    } else {
        console.log(jogadores[relogio]);
        relogio++;
    }
}


rodada();
const intervalo = setInterval(rodada, 2000);
