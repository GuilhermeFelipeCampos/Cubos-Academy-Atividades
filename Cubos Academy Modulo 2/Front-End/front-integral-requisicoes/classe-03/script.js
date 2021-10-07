const pokeInput = document.querySelector('#pokemon');
const resultTexto = document.querySelector('#h2');
const resultImagem = document.querySelector('#imagem');
const escondido = document.querySelector('.hidden');
const habilidade = document.querySelector('#abilities');
const div = document.querySelector('div')

pokeInput.addEventListener('change', () => {



    const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput.value}/`);

    promise.then((resposta) => {
        if (!resposta.ok) {
            escondido.style.display = "flex";
            return;
        }
        escondido.style.display = "none";
        const promiseBody = resposta.json();

        promiseBody.then((body) => {

            const abil = body.abilities;

            resultTexto.textContent = body.name;
            resultImagem.src = body.sprites.front_default;
            resultImagem.alt = body.name;

            for (let item of abil) {

                const p = document.createElement('p');
                p.textContent = "Habilidade: " + item.ability.name;

                div.append(p);

            }


        });
    });
});
// console.log(typeof habil)
// habilidade.textContent = "Habilidades:" + body.abilities;