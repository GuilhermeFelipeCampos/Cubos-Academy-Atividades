const cpf = "12345678900";
//const cnpj = "12345678900";
const cnpj = "12345678000199";
let cpfFormat = "";
let cnpjFormat = "";
if (cpf.length === 11) {
    cpfFormat += cpf.slice(0, 3);
    cpfFormat += "." + cpf.slice(3, 6);
    cpfFormat += "." + cpf.slice(6, 9);
    cpfFormat += "-" + cpf.slice(-2);
    console.log(cpfFormat);
} else {
    console.log("CPF Inválido");
}
if (cnpj.length === 14) {
    cnpjFormat += cnpj.slice(0, 2);
    cnpjFormat += "." + cnpj.slice(2, 5);
    cnpjFormat += "." + cnpj.slice(5, 8);
    cnpjFormat += "/" + cnpj.slice(8, 12);
    cnpjFormat += "-" + cnpj.slice(-2);
    console.log(cnpjFormat);

} else {
    console.log("CNPJ Inválido");
}


