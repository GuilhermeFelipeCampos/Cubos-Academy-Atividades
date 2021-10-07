const grupos = ['4', '0', '2', '3'];
let grupo1 = parseInt(grupos[0], 10);
let grupo2 = parseInt(grupos[1], 10);
let grupo3 = parseInt(grupos[2], 10);
let grupo4 = parseInt(grupos[3], 10);

let taxis = grupo4;
grupo4 = 0;

taxis += Math.floor(grupo2 / 2);
grupo2 = grupo2 % 2;
const grupoTresEUm = Math.min(grupo1, grupo3);
taxis += grupoTresEUm;
grupo1 -= grupoTresEUm;
grupo3 -= grupoTresEUm;
if (grupo3 === 0) {
    taxis += Math.ceil((grupo1 + grupo2 * 2) / 4);
} else {
    taxis += (grupo3 + grupo2);
}

console.log(taxis);