const corpo = document.querySelector('body');

fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((resposta) => {
    const promiseBody = resposta.json();
    promiseBody.then((body) => {
        body.forEach((photo) => {
            const div = document.createElement('div');
            div.classList.add('foto');

            const image = document.createElement('img');
            image.src = photo.url;

            const titulo = document.createElement('p');
            titulo.textContent = photo.title;
            div.append(image, titulo);
            corpo.append(div);
        })
    })
})