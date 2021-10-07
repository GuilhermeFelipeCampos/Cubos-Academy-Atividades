const numeros = [1, 1, 1];

/*const soma = numeros.reduce((soma, numeros) => soma + numeros, 0);
console.log(soma);
let jogador = 0;

if (soma > numeros.length) {
    jogador = (soma % numeros.length);
    if (jogador === 0) {
        jogador = numeros.length;
    }
}
console.log(jogador);
//let i = 0;

/*if (soma === numeros.length) {
    console.log(soma);
} else {
    for (let i = 0; i <= soma; i++) {
        if (numeros.length > jogador) {
            jogador++;
        } else {
            jogador = 0;
        }
    }
    if (jogador === 0) {
        console.log(jogador = 1);
    }

    console.log(jogador);
}
/*if (soma === numeros.length) {
    console.log(numeros.length)
} else {

    while (soma >= i) {
        i++;
        if (numeros.length !== jogador) {
            jogador++;
        } else {
            jogador = 0;
        }
    }
    console.log(jogador);
}*/

const soma = numeros.reduce((soma, numeros) => soma + numeros, 0);
let jogadorEscolhido = 0;
if (soma === numeros.length) {
    jogadorEscolhido = soma;
    console.log(jogadorEscolhido);
} else if (soma > numeros.length) {
    jogadorEscolhido = (soma % numeros.length);
    if (jogadorEscolhido === 0) {
        jogadorEscolhido = numeros.length;
    }
}
console.log(jogadorEscolhido);

const palavra = input.trim();
let novaPalavra = "";

if (palavra === palavra.toLowerCase()) {
    console.log(palavra);

} else if (palavra === palavra.toUpperCase()) {
    novaPalavra = palavra.toLowerCase();
    console.log(novaPalavra);

} else {
    for (let letra of palavra) {
        if (letra === letra.toUpperCase()) {
            letra = letra.toLowerCase();
        }
        novaPalavra += letra;
    }


    console.log(novaPalavra);
}
