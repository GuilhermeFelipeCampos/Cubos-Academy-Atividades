const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const numero = document.querySelector('#numero');
const mensagem = document.querySelector('.aviso');

cep.addEventListener('change', () => {
    if (String(cep.value).length !== 8) {
        mensagem.textContent = "Você Digitou o cep de forma errada";
        return;
    }
    const promise = fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    promise.then((resposta) => {
        const promiseBody = resposta.json();

        promiseBody.then((body) => {
            cidade.value = body.localidade;
            rua.value = body.logradouro;
            numero.value = body.ibge;
        });
    })


});
