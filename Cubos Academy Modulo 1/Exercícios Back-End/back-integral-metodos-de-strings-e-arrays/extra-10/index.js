const cpf = "011.022.033-44";
let provisorio = cpf;
let cpfFormat = "";

while (cpfFormat !== provisorio) {

    cpfFormat = provisorio;

    provisorio = provisorio.replace(".", "");
    provisorio = provisorio.replace("-", "");

}

console.log(cpfFormat);