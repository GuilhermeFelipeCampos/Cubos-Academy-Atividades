const inscrever = document.querySelector('.btn');
const mostrar = document.querySelector('.modal');
const confirmar = document.querySelector('.confirmar');
const btnModal = document.querySelectorAll('.modal button');


inscrever.addEventListener('click', clicarInscrever);
btnModal.forEach(botao => {

    botao.addEventListener('click', function () {
        mostrar.classList.add('escondido');
    });
});

confirmar.addEventListener('click', function () {
    inscrever.textContent = "INSCREVER-SE";
    inscrever.classList.remove('inscrito');


});


function clicarInscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO";
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', clicarInscrever);
    botaoClicado.addEventListener('click', function () {
        mostrar.classList.remove('escondido');
    });
}