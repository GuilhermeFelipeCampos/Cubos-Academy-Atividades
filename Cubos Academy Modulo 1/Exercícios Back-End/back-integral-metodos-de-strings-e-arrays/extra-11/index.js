const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function carros(nome, numero) {

    let carro = "";
    let final = "";
    carro = nome.slice(numero, numero + 3);
    carro = carro.toString();

    while (final !== carro) {
        final = carro;
        carro = carro.replace(",", " - ");
    }
    console.log(carro);
}

carros(nomes, posicao);