const escolher = document.querySelector('.escolher');
const genero = document.querySelector('#genero-musical');
const escondido = document.querySelector('.escondido');
const inputEscondido = document.querySelector('.escondido input');
const playListRock = document.querySelector('.escondido1');
const playHipHop = document.querySelector('.escondido2');
const playListRb = document.querySelector('.escondido3');
const listRock = document.querySelector('#playlist-rock');
const listHipHop = document.querySelector('#playlist-hiphop');
const listRb = document.querySelector('#playlist-rb');
const form = document.querySelector('form');
const buscar = document.querySelector('.escondido button');


escolher.addEventListener('click', () => {
    escondido.style.display = "flex";
    if (genero.value === "rock") {
        playListRock.style.display = "flex";
        playHipHop.style.display = "none";
        playListRb.style.display = "none";
    } else if (genero.value === "hip-hop") {
        playHipHop.style.display = "flex";
        playListRock.style.display = "none";
        playListRb.style.display = "none";
    } else if (genero.value === "rb") {
        playListRb.style.display = "flex";
        playListRock.style.display = "none";
        playHipHop.style.display = "none";
    }
})
buscar.addEventListener('click', () => {
    const url = "https://www.google.com/search?q=";
    const yoube = "https://www.youtube.com/watch?";
    if (genero.value === "rock" && !inputEscondido.value) {
        window.open(yoube + listRock.value);
    } else if (genero.value === "hip-hop" && !inputEscondido.value) {
        window.open(yoube + listHipHop.value);
    } else if (genero.value === "rb" && !inputEscondido.value) {
        window.open(yoube + listRb.value);
    } else {
        window.open(url + inputEscondido.value);

    }

})
