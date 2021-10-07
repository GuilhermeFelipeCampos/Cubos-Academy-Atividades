const criptoInput = document.querySelector('#cripto');
const resultado = document.querySelector('#label');

criptoInput.addEventListener('change', () => {
    if (!criptoInput) {
        return;
    }
    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/ticker/`);

    promiseResposta.then((resposta) => {
        const promiseBody = resposta.json();

        promiseBody.then((body) => {
            resultado.textContent = Number(body.ticker.high).toFixed(2);
        });
    });
})