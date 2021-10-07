const input = document.querySelector('input');
const itens = document.querySelector('ul');

input.addEventListener('keydown', (event) => {

    if (event.key !== 'Enter' || input.value === "") {
        return;
    }
    const item = document.createElement('li');
    item.textContent = input.value;
    item.addEventListener('click', () => {
        item.remove();
    });
    itens.append(item);
    input.value = "";
})