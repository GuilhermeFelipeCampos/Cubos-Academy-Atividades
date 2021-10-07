const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

let existsWordBiggerThanFive = palavras.some(word => word.length > 5)

existsWordBiggerThanFive ? console.log("existe palavra inválida")
    : console.log("array validado");

