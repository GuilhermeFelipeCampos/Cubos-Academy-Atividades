const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasNovas = frutas.map(x => x.toLowerCase());
const modificado = frutasNovas.map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase()));
modificado.forEach((x, i) => {
    console.log(`${i} - ${x}`);
});


