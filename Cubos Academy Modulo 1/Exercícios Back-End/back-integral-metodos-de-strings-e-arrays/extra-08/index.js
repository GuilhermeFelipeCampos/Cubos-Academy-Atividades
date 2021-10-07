const email = "aluno@cubos.academy";

if (email.includes("@")) {
    if (email.includes(".")) {
        if (email[0] !== "." && email.lastIndexOf(".") !== email.length - 1) {
            console.log("E-mail válido");
        } else {
            console.log("E-mail Inválido");
        }
    } else {
        console.log("E-mail Inválido");
    }
} else {
    console.log("E-mail Inválido");
}
