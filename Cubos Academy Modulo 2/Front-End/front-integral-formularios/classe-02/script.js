const form = document.querySelector('form');
const senha = document.querySelector('#senha');
const confirmaSenha = document.querySelector('#confirma-senha');

form.addEventListener('submit', (event) => {
    if (senha.value !== confirmaSenha.value) {
        event.preventDefault();
    }
})