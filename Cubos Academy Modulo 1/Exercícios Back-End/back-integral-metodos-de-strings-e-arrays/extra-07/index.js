const celular = 7199918888;

let numeroProvisorio = celular.toString();
let celularFormat = "";

if (numeroProvisorio.length === 10) {
    celularFormat += "(" + numeroProvisorio.slice(0, 2) + ")";
    celularFormat += " 9 " + numeroProvisorio.slice(2, 6) + "-";
    celularFormat += numeroProvisorio.slice(-4);
} else if (numeroProvisorio.length === 8) {
    celularFormat += " 9 " + numeroProvisorio.slice(0, 4) + "-";
    celularFormat += numeroProvisorio.slice(-4);
} else if (numeroProvisorio.length === 11) {
    celularFormat += "(" + numeroProvisorio.slice(0, 2) + ")";
    celularFormat += "  " + numeroProvisorio.slice(2, 3) + " ";
    celularFormat += numeroProvisorio.slice(3, 7) + "-";
    celularFormat += numeroProvisorio.slice(-4);
} else {
    console.log("Número Inválido");
}

console.log(celularFormat);