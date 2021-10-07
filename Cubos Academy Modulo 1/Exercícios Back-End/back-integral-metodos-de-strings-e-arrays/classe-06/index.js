const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let inverso = frutas.reverse();
let lista = "";
console.log(inverso);

for (let item of inverso) {
    lista += item + ", ";
}
lista = lista.slice(0, lista.length - 2);
console.log(lista);
frutas.shift();
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.push("Melão");
console.log(frutas);