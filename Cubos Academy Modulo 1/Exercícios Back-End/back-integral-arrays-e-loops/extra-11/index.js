const original = [5, 7, 13, 17, 26, 34, 118, 245];
const resposta = [];

for(let numero of original){

    if (numero > 10 && numero < 20 || numero > 100){

        resposta.push(numero);
    }
}

console.log(resposta);
