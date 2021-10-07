const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomeComA = [];

for (let nome of nomes){

    if (nome.startsWith("A") || nome.startsWith("a")){

        nomeComA.push(nome);
     
    }

}
console.log(nomeComA);
