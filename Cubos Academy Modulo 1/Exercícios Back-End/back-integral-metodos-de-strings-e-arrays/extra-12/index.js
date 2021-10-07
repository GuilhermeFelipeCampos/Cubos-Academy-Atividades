const nome = 'Guido Cerqueira';
function apelido(nick) {

    let apelido = nick.toLowerCase().replace(" ", "").padStart(nick.length, "@").substr(0, nick.length - 2);

    console.log(apelido);
}

apelido(nome);