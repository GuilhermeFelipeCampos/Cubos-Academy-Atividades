
const body = document.querySelector('body');
const themeImage = document.querySelector('.btn-theme');

const carrocelMovies = document.querySelector('.movies');

const rightArrow = document.querySelector('.btn-next');
const leftArrow = document.querySelector('.btn-prev');
const input = document.querySelector('.input');

const modalOpen = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const titleModal = document.querySelector('.modal__title');
const imgModal = document.querySelector('.modal__img');
const overviewModal = document.querySelector('.modal__description');
const ratingModal = document.querySelector('.modal__average');
const genresModal = document.querySelector('.modal__genres');



const highLightVideo = document.querySelector('.highlight__video');
const highLightTitle = document.querySelector('.highlight__title');
const highLightRating = document.querySelector('.highlight__rating');
const highLightGenreLaunch = document.querySelector('.highlight__genre-launch');
const highLightOverview = document.querySelector('.highlight__description');
const highLightDate = document.querySelector('.highlight__launch');
const highLightLink = document.querySelector('.highlight__video-link');
const highLightGenre = document.querySelector('.highlight__genres');

const linkHome = 'https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false';
charmarLista = async (link) => {
    const promise = await fetch(link);

    const body = await promise.json()

    return body.results;
}
let arrayFilme = charmarLista(linkHome);


const mostrarFilmes = async (listaFilmes) => {

    const filmes = await listaFilmes;


    for (let i = 0; i < filmes.length; i++) {

        const divMovie = document.createElement('div');
        divMovie.classList.add('movie');
        if (i >= 5) {
            divMovie.classList.add('hidden');
        }
        divMovie.style.backgroundImage = `url(${filmes[i].poster_path})`;
        divMovie.setAttribute("id", filmes[i].id);
        const divMovieInfo = document.createElement('div');
        divMovieInfo.classList.add('movie__info');

        const spanMovieTitle = document.createElement('span');
        spanMovieTitle.classList.add('movie__title');
        spanMovieTitle.textContent = filmes[i].title;

        const spanMovieRating = document.createElement('span');
        spanMovieRating.classList.add('movie__rating');

        const imgStar = document.createElement('img');
        imgStar.src = './assets/estrela.svg';


        spanMovieRating.append(imgStar);
        spanMovieRating.innerHTML += filmes[i].vote_average;

        divMovieInfo.append(spanMovieTitle, spanMovieRating);
        divMovie.append(divMovieInfo);
        carrocelMovies.append(divMovie);
    }




}

mostrarFilmes(arrayFilme);



rightArrow.addEventListener('click', () => {
    const divMovies = document.querySelector('.movies')
    const selectMovie = []
    for (let item of divMovies.children) {
        selectMovie.push(item);
    }


    const primeiroIndexApagar = selectMovie.findIndex((item) => {

        if (item.classList.contains('hidden')) {
            return false;
        } else {
            return true;
        }
    })
    const ultimoIndexApagar = selectMovie.reduce((acc, cur, idx) => {
        if (cur.classList.contains('hidden')) {
            return acc;
        } else {
            return idx;
        }

    });
    for (let i = primeiroIndexApagar; i <= ultimoIndexApagar; i++) {
        selectMovie[i].classList.add('hidden')
    }
    if (ultimoIndexApagar >= selectMovie.length - 1) {

        for (let i = 0; i < 5; i++) {
            if (i >= selectMovie.length) {
                break;
            }
            selectMovie[i].classList.remove('hidden');

        }
        return;
    }
    for (let i = ultimoIndexApagar + 1; i <= ultimoIndexApagar + 5; i++) {
        if (i >= selectMovie.length) {
            break;
        }
        selectMovie[i].classList.remove('hidden');

    }


})


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const linkpesquisa = ` https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`;
        arrayFilme = charmarLista(linkpesquisa);
        const divMovies = document.querySelectorAll('.movie')

        for (let item of divMovies) {
            item.remove();
        }

        mostrarFilmes(arrayFilme);

    }
})










//highLight();
//videoHighLight();







// const removeAll = () => {

//     while ((carrocelMovies.childNodes).length !== 0) {

//         for (let item of (carrocelMovies.childNodes)) {
//             item.remove();
//         }
//     }

// }
// const showMovies = async () => {

//     // const divMovie = document.createElement('div');
//     // divMovie.classList.add('movie');
//     // divMovie.classList.add(`${classe}`);
//     // divMovie.style.backgroundImage = `url(${element.poster_path})`;
//     // divMovie.setAttribute("id", element.id);
//     // const divMovieInfo = document.createElement('div');
//     // divMovieInfo.classList.add('movie__info');

//     // const spanMovieTitle = document.createElement('span');
//     // spanMovieTitle.classList.add('movie__title');
//     // spanMovieTitle.textContent = element.title;

//     // const spanMovieRating = document.createElement('span');
//     // spanMovieRating.classList.add('movie__rating');

//     // const imgStar = document.createElement('img');
//     // imgStar.src = './assets/estrela.svg';


//     // spanMovieRating.append(imgStar);
//     // spanMovieRating.innerHTML += element.vote_average;

//     // divMovieInfo.append(spanMovieTitle, spanMovieRating);
//     // divMovie.append(divMovieInfo);
//     // carrocelMovies.append(divMovie);

//     // if (classe >= 5) {
//     //     divMovie.classList.add('hidden')
//     // }

//     classe++;
// });

//     });
// let inicio = 0;
// let fim = 5;
// rightArrow.addEventListener('click', () => {
//     for (let item of carrocelMovies.children) {
//         item.classList.add('hidden');
//     }
//     if (fim === 5) {
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim += 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }

//         return;
//     }
//     if (fim === 10) {
//         inicio -= 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim += 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }

//         return;
//     }
//     if (fim === 15) {
//         inicio -= 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim += 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }

//         return;
//     }
//     if (fim === 20) {
//         inicio -= 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         inicio = 0;
//         fim = 5;
//         for (inicio; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }

//         return;
//     }


// });
// leftArrow.addEventListener('click', () => {
//     if (fim === 5) {
//         for (inicio = 0; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim = 20;
//         for (inicio = 15; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }
//         return;
//     }
//     if (fim === 20) {
//         for (inicio = 15; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim = 15;
//         for (inicio = 10; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }
//         return;
//     }
//     if (fim === 15) {
//         for (inicio = 10; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim = 10;
//         for (inicio = 5; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }
//         return;
//     }
//     if (fim === 10) {
//         for (inicio = 5; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.add('hidden');
//         }
//         fim = 5;
//         for (inicio = 0; inicio < fim; inicio++) {
//             (carrocelMovies.children[inicio]).classList.remove('hidden');
//         }
//         return;
//     }
// });





// const searchMovie = async () => {
//     await fetch(` https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`).then((resp) => {
//         const promiseBody = resp.json();
//         promiseBody.then((body) => {

//             if ((body.results).length === 0) {
//                 input.value = "";
//                 showMovies();

//                 return;
//             }
//             classe = 0;
//             removeAll();
//             body.results.forEach((element) => {

//                 const divMovie = document.createElement('div');
//                 divMovie.classList.add('movie');
//                 divMovie.classList.add(`${classe}`);
//                 divMovie.style.backgroundImage = `url(${element.poster_path})`;
//                 divMovie.setAttribute("id", element.id);
//                 const divMovieInfo = document.createElement('div');
//                 divMovieInfo.classList.add('movie__info');

//                 const spanMovieTitle = document.createElement('span');
//                 spanMovieTitle.classList.add('movie__title');
//                 spanMovieTitle.textContent = element.title;

//                 const spanMovieRating = document.createElement('span');
//                 spanMovieRating.classList.add('movie__rating');

//                 const imgStar = document.createElement('img');
//                 imgStar.src = './assets/estrela.svg';


//                 spanMovieRating.append(imgStar);
//                 spanMovieRating.innerHTML += element.vote_average;

//                 divMovieInfo.append(spanMovieTitle, spanMovieRating);
//                 divMovie.append(divMovieInfo);
//                 carrocelMovies.append(divMovie);

//                 if (classe >= 5) {
//                     divMovie.classList.add('hidden')
//                 }

//                 classe++;
//             });

//             console.log(body.results)



//         });
//     });

// }
// const highLight = async () => {
//     await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR').then((resp) => {
//         const promiseBody = resp.json();
//         promiseBody.then((body) => {


//             highLightVideo.style.background = `linear-gradient(rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url('${body.backdrop_path}') no-repeat center / cover`;
//             highLightTitle.textContent = body.title;
//             highLightRating.textContent = body.vote_average;
//             const names = [];
//             body.genres.forEach((element) => {

//                 names.push(element.name);


//             })

//             const nomes = names.join(",");
//             let data = new Date(body.release_date);
//             data = data.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

//             highLightGenre.textContent = nomes;
//             highLightDate.textContent = data;
//             highLightOverview.textContent = body.overview;

//         })
//     })


// }
// const videoHighLight = async () => {
//     await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR').then((resp) => {
//         const promiseBody = resp.json();
//         promiseBody.then((body) => {
//             highLightLink.href = `https://www.youtube.com/watch?v=${body.results[0].key}`;


//         });
//     });
// }

// const modalMovie = async (number) => {
//     await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${number}?language=pt-BR`).then((resp) => {
//         const promiseBody = resp.json();
//         promiseBody.then((body) => {


//             body.genres.forEach((element) => {

//                 const modalGenres = document.createElement('span');
//                 modalGenres.classList.add('modal__genre');
//                 modalGenres.textContent = element.name;
//                 genresModal.append(modalGenres);
//             })



//             titleModal.textContent = body.title;
//             imgModal.src = body.backdrop_path;
//             overviewModal.textContent = body.overview;
//             ratingModal.textContent = body.vote_average;
//             console.log(titleModal, imgModal, overviewModal, ratingModal)

//         });
//     });
// }






// input.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' && input.value !== "") {
//         searchMovie();
//         input.value = "";

//     } else if (event.key === "Enter" && input.value === "") {

//         removeAll();
//         classe = 0;
//         showMovies();
//     }
// });
// carrocelMovies.addEventListener('click', (event) => {

//     while ((genresModal.childNodes).length !== 0) {

//         for (let item of (genresModal.childNodes)) {
//             item.remove();
//         }
//     }

//     const selectedMovie = event.target;
//     modalOpen.classList.remove('hidden');
//     body.style.overflowY = 'hidden';
//     const filme = modalMovie(selectedMovie.id);



// });

// closeModal.addEventListener('click', (event) => {
//     body.style.overflowY = "visible";
//     modalOpen.classList.add('hidden');

//     event.stopPropagation();
// });

// modalOpen.addEventListener('click', (event) => {
//     body.style.overflowY = "visible";
//     modalOpen.classList.add('hidden');
//     event.stopPropagation();

// });


// themeImage.addEventListener('click', () => {
//     if (themeImage.src.includes('/assets/light-mode.svg')) {
//         console.log('fdgdfgdfgdfgdfgdfgdfgdf')
//         themeImage.src = './assets/dark-mode.svg';
//         body.style.setProperty('--mode-background-body', '#242424');
//         body.style.setProperty('--mode-border-input', '#FFFFFF');
//         body.style.setProperty('--mode-subtitle-color', '#FFFFFF');
//         body.style.setProperty('--mode-hr-span-color', '#A987ED');
//         body.style.setProperty('--mode-hi-background', '#454545');
//         body.style.setProperty('--mode-hgl-color', 'rgba(255, 255, 255, 0.7)');
//         body.style.setProperty('--mode-hi-boxshadow', 'rgba(255, 255, 255, 0.15)');


//     } else {
//         themeImage.src = './assets/light-mode.svg';
//         body.style.setProperty('--mode-background-body', '##FFFFFF');
//         body.style.setProperty('--mode-border-input', '#979797');
//         body.style.setProperty('--mode-subtitle-color', '#000000');
//         body.style.setProperty('--mode-hr-span-color', '#A785ED');
//         body.style.setProperty('--mode-hi-background', '#FFFFFF');
//         body.style.setProperty('--mode-hgl-color', 'rgba(0, 0, 0, 0.7)');
//         body.style.setProperty('--mode-hi-boxshadow', 'rgba(0, 0, 0, 0.15)');

//     }

// })




