const precos = [200, 150, 50, 100];
/*if (valores.length >= 3) {
    const menorPreco = Math.min.apply(Math, valores);
    const somaPrecos = valores.reduce((somaPrecos, valores) => somaPrecos + valores, 0);
    console.log(somaPrecos - (menorPreco / 2));
} else {
    console.log(somaPrecos);
}
*/

let menorPreco = precos[0];
let somaPreco = 0;

if (precos.length >= 3) {
    for (let preco of precos) {
        somaPreco += preco;
        if (menorPreco > preco) {
            menorPreco = preco;
        }
    }
    console.log(somaPreco - (menorPreco / 2));
} else {
    console.log(somaPreco);
}
