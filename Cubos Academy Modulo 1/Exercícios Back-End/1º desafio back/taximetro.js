const min = 25;
const km = 11.5;
let minAdicional = 0;
let kmAdicional = 0;
let valorMin = 0;
let valorKm = 0;

if (min > 20) {
    minAdicional = min - 20;
    valorMin = (20 * 50) + (minAdicional * 30);
} else {
    valorMin = (min * 50);
}
if (km > 10) {
    kmAdicional = km - 10;
    valorKm = (10 * 70) + (kmAdicional * 50);
}
console.log(valorMin + valorKm);

