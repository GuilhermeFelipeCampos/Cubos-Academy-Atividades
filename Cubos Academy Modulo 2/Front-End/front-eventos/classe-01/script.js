const input = document.querySelector('input');
const frutas = document.querySelectorAll('li');

input.addEventListener('keypress', function (event) {

    if (event.key === "Enter") {
        if (input.value === "") {
            frutas.forEach(fruta => {
                fruta.classList.remove('esconder');
            });

        }
        if (input.value !== "") {
            frutas.forEach(fruta => {
                if (fruta.textContent !== input.value) {
                    fruta.classList.add('esconder');
                }
            });

        }
        input.value = "";
    }


});






