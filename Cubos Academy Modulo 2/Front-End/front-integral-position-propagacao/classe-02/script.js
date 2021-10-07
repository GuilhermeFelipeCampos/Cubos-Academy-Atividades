const imagem = document.querySelector('.image img');
const modal = document.querySelector('.modal');

imagem.addEventListener('click', () => {
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
})