const comentario = "Esse COVID é muito perigoso!";

if (comentario.includes("COVID") || comentario.includes("covid") || comentario.includes("Covid") || comentario.includes("cOVID") || comentario.includes("COvid")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado.");

}