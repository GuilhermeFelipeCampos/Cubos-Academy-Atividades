const data = new Date(2002, 5, 30, 8);
console.log(data);
const maisUmsHora = +data + 1000 * 60 * 60;
//console.log(+data, maisUmsHora);

const maisUmaHoraDate = new Date(maisUmsHora);
console.log(maisUmaHoraDate);