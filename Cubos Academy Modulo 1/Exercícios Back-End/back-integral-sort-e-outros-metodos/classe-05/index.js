const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

let bebidaProibida = palavras.some(lista => lista === "cerveja" || lista === "vodka")
bebidaProibida ?
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
    : console.log("vamos as compras!.");