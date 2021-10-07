const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda', 'Adalto', 'andreia'];

const nomesComA = nomes.filter(x => x.charAt(0) === "a" || x.charAt(0) === "A");

console.log(nomesComA);