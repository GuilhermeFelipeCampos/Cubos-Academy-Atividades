const nomeArquivo = 'Foto da Familia.pdf';

function extensao(arquivo) {

    let tipo = "";
    tipo = arquivo.slice(arquivo.indexOf("."), arquivo.length);
    tipo = tipo.replace(".", "").trim();
    if (tipo === "jpg" || tipo === "jpeg" || tipo === "gif" || tipo === "png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo Inválido");
    }

}

extensao(nomeArquivo);