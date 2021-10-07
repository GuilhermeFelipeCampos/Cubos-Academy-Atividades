const inputs = document.querySelectorAll('input');
let i = 0;
inputs.forEach(input => {
    input.addEventListener('change', function (event) {
        const campoPreenchido = event.target;

        if (campoPreenchido.dataset.resposta === campoPreenchido.value) {
            campoPreenchido.classList.add('acerto');
            i++;
        } else {
            campoPreenchido.classList.add('erro');
        }
    })

});