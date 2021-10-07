const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidade = cidades.reduce((x, y) => x.length > y.length ? x : y);

console.log(cidade);