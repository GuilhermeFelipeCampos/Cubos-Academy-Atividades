const imagem1 = document.querySelector('.imagem-1 img');
const imagem2 = document.querySelector('.imagem-2 img');
const imagemModal = document.querySelector('.modal img');
const link = document.querySelector('.modal a');
const modal = document.querySelector('.modal');



imagem1.addEventListener('click', () => {
    imagemModal.src = imagem1.src;
    modal.style.display = "flex";
    link.href = imagem1.src;
    link.target = "_blank";
});

imagem2.addEventListener('click', () => {
    imagemModal.src = imagem2.src;
    modal.style.display = "flex";
    link.href = imagem2.src;
    link.target = "_blank";
});
modal.addEventListener('click', () => {
    modal.style.display = "none";
});

link.addEventListener('click', (event) => {
    event.stopPropagation();
});