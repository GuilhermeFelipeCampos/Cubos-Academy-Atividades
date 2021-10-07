const form = document.querySelector('form');
const inputSenha = document.querySelector('#senha');
const inputRepitaSenha = document.querySelector('#repita-senha');


form.addEventListener('submit', (event) => {
    if (inputSenha.value !== inputRepitaSenha.value) {
        event.preventDefault();
    }
})