const div = document.querySelector('div');

const input = document.querySelector('input');

fetch('https://restcountries.eu/rest/v2/all').then((resposta) => {
    const promiseBody = resposta.json();
    promiseBody.then((body) => {
        body.forEach((pais) => {
            const divPais = document.createElement('div');
            divPais.classList.add('pais');
            const nome = document.createElement('h2');
            nome.textContent = pais.name;
            const regiao = document.createElement('span');
            regiao.textContent = "Região: " + pais.region + " ---";
            const cidade = document.createElement('span');
            cidade.textContent = " Capital: " + pais.capital;
            const populacao = document.createElement('p');
            populacao.textContent = "População: " + pais.population;
            const bandeira = document.createElement('img');
            bandeira.src = pais.flag;

            divPais.append(nome, regiao, cidade, populacao, bandeira);
            div.append(divPais);
        });

    })
})


input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || input.value === "") {
        return;
    } else {

        const mostraPaises = document.querySelectorAll('.pais')
        // console.log(mostraPaises);
        for (let item of mostraPaises) {
            const nome = item.querySelector('h2');
            // console.log(nome);
            if (input.value !== nome.textContent) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }

        }
        input.value = "";
    }



})