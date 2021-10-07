const textao = "eu gosto. eu vou para praia. pode parar, tudo eu +vou para praia/ ";

let contador = textao.split(" ");
let novoContador = [];
for (let item of contador) {
    novoContador.push(item.trim());

}


console.log(contador.length);