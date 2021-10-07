const palavra = "cSDDSDerwer";

const palavraMaiuscula = palavra.toUpperCase();
const palavraMinuscula = palavra.toLowerCase();
let novaPalavra = "";
if (palavra === palavraMaiuscula) {
    console.log(palavraMinuscula);
} else if (palavra === palavraMinuscula) {
    console.log(palavraMinuscula);

} else {
    let validaLetra = 0;
    let novaLetra = "";
    for (let i = 1; i < palavra.length; i++) {
        if (palavra[i] === palavraMaiuscula[i]) {
            validaLetra++;

        } else {
            validaLetra--;
        }
    }

    if (validaLetra === palavra.length - 1)
        console.log(novaPalavra + novaLetra);
}

/*if (palavra === palavra.toLowerCase()) {
    console.log(palavra);

} else if (palavra === palavra.toUpperCase()) {
    novaPalavra = palavra.toLowerCase();
    console.log(novaPalavra);

} else {
    for (let letra of palavra) {
        novaPalavra += letra.toLowerCase();
    }

    if (palavra.charAt(0).toLowerCase() && palavra.charAt(1).toUpperCase()) {
        novaPalavra = novaPalavra[0].toUpperCase() + novaPalavra.substr(1);
    }else{
        novaPalavra = novaPalavra;
    }

    console.log(novaPalavra);
}

/*else {
let novaLetra = "";
for (let i = 1; i < palavra.length; i++) {
 if (palavra[0] === palavra[0].toLowerCase() && palavra[i] !== palavra[i].toLowerCase) {
     novaPalavra = palavra[0].toUpperCase();
     novaLetra += palavra[i].toLowerCase();

 } else if (palavra[0] === palavra[0].toUpperCase() && palavra[i] === palavra[i].toLowerCase()) {
     novaPalavra = palavra[0].toUpperCase();
     novaLetra += palavra[i].toLowerCase();
 }
}
novaPalavra += novaLetra;
console.log(novaPalavra);
}else {
 for (let letra of palavra) {

     novaPalavra += letra.toLowerCase();
 }

}
*/
const palavra = input.trim();
const palavraMaiuscula = palavra.toUpperCase();
const palavraMinuscula = palavra.toLowerCase();
let novaPalavra = "";
if (palavra === palavraMaiuscula) {
    console.log(palavraMinuscula);
} else if (palavra === palavraMinuscula) {
    console.log(palavraMinuscula);

} else {
    novaPalavra = palavraMaiuscula.charAt(0);
    let novaLetra = "";
    for (let i = 1; i < palavra.length; i++) {
        if (palavra[i] === palavraMaiuscula[i]) {
            novaLetra += palavraMinuscula[i];
        } else {
            novaLetra += palavra[i];
        }
    }

    console.log(novaPalavra + novaLetra);
}


if (palavra === palavraMaiuscula) {
    console.log(palavraMinuscula);
} else if (palavra === palavraMinuscula) {
    console.log(palavraMinuscula);

} else {
    let validaLetra = 0;
    for (let i = 1; i < palavra.length; i++) {
        if (palavra[i] === palavraMaiuscula[i]) {
            validaLetra++;
        } else {
            validaLetra--;
        }
    }
    if (validaLetra === palavra.length - 1) {
        novaPalavra = palavraMinuscula[0].toUpperCase() + palavraMinuscula.substr(1);
    } else {
        novaPalavra = palavraMinuscula;
    }

    console.log(novaPalavra);
}