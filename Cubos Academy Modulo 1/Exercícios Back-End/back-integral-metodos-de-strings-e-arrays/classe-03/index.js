const texto = "Aprenda programar do zero na Cubos Academy";
let textoUrl = "";
let textoProvisorio = texto.toLowerCase();

while (textoProvisorio !== textoUrl) {
    textoUrl = textoProvisorio;
    textoProvisorio = textoProvisorio.replace(" ", "-");
}

console.log(textoUrl);