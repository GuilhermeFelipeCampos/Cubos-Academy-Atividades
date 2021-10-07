//calculo da distancia euclidiana.

const linhas = input.trim().split("\n");
const n = parseInt(linhas[0]);
const coordenadas = [];
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseInt(coord[0]),
        y: parseInt(coord[1])
    });
}
let acumulaX = 0;
let acumulaY = 0;
for (let coordenada of coordenadas) {
    acumulaX -= coordenada.x;
    acumulaY -= coordenada.y;
}
acumulaX = Math.pow(acumulaX, 2);
acumulaY = Math.pow(acumulaY, 2);

console.log(Math.SQRT2(acumulaX + acumulaY));

let acumulaX = 0;
let acumulaY = 0;
for (let coordenada of coordenadas) {
    acumulaX = acumulaX - coordenada.x;
    acumulaY = acumulaY - coordenada.y;
}
acumulaX = Math.pow(acumulaX, 2);
acumulaY = Math.pow(acumulaY, 2);

console.log(Math.sqrt(acumulaX + acumulaY));
