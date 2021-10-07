let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, "0");
email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);
console.log(tags);