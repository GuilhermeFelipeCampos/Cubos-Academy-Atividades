const letras = ["A", "a", "B", "C", "E", "e"];
let encontrado = false;
let cont = 0;

for(let item of letras){
    if(item === "E" || item === "e"){
        cont++;
        encontrado = true;
    }
}

if(!encontrado){
    console.log("Nenhuma letra E ou e foi encontrada no Array");
}else if(cont === 1){
    console.log(`Foi encontrada ${cont} letra E ou e`);
}else{
    console.log(`Foram encontradas ${cont} letras E ou e`);
}

