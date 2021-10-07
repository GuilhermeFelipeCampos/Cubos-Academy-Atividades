const finalDaCopa = new Date(2002, 5, 30, 8);
const inicioTimeStamp = +finalDaCopa;

const primeiroGolTS = inicioTimeStamp + (45 + 15 + 22) * 60 * 1000;
const primeiroGolData = new Date(primeiroGolTS);



console.log(primeiroGolData);
console.log(new Date(+finalDaCopa + (45 + 15 + 38) * 60 * 1000));