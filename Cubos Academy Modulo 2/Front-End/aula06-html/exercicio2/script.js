
const input = document.querySelector('input');
const itens = document.querySelector('ul');

input.addEventListener('keydown', (event) => {

    if (event.key !== 'Enter' || input.value === "") {
        return;
    }
    const item = document.createElement('li');
    const descricao = document.createElement('span');

    descricao.textContent = input.value;
    descricao.addEventListener('click', () => {
        descricao.classList.toggle('completa');
    });

    const botao = document.createElement('button');
    botao.textContent = "X";
    botao.addEventListener('click', () => {
        item.remove();
    });
    item.append(descricao, botao);
    itens.append(item);

    input.value = "";
})