const senhaOriginal = "cubos";
const senhaDigitada = "cuggbyos";

if (senhaDigitada.length >= senhaOriginal.length) {
    let x = 0;
    let validaSenha = "";
    for (let i = 0; i < senhaDigitada.length; i++) {

        if (senhaDigitada[i] === senhaOriginal[x]) {
            validaSenha += senhaDigitada[i];
            x++;
        }
    }
    console.log(validaSenha);

}