const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera", ""];

numeros.sort((x, y) => x - y);
console.log(numeros);

numeros.sort((x, y) => y - x);
console.log(numeros);

numeros.sort();
console.log(numeros);

frutas.sort((x, y) => x.localeCompare(y));
console.log(frutas);

frutas.sort((x, y) => y.localeCompare(x));
console.log(frutas);
frutas.sort((x, y) => x.length - y.length);
console.log(frutas);