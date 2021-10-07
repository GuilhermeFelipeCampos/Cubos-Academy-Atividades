const criptoInput = document.querySelector('#cripto');
const resultado = document.querySelector('#label');
const quantidade = document.querySelector('#quantidade');
const oferta = document.querySelector('#oferta');


criptoInput.addEventListener('change', () => {
    if (!criptoInput) {
        return;
    }
    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/ticker/`);

    promiseResposta.then((resposta) => {
        const promiseBody = resposta.json();

        promiseBody.then((body) => {
            resultado.textContent = Number(body.ticker.high).toFixed(2);
            quantidade.textContent = Number(body.ticker.vol).toFixed(2);
            oferta.textContent = Number(body.ticker.buy).toFixed(2);
        });
    });
})