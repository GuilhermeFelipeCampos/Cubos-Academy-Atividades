
function solucao(joao, andre) {
    // Escreva seu codigo aqui
    if(joao === andre){
        console.log("EMPATE");
    }else if(joao === "PEDRA" && andre != "PAPEL"){
             console.log("JOAO");
     }else if(joao === "TESOURA" && andre != "PEDRA"){
             console.log("JOAO");
     }else if(joao === "PAPEL" && andre != "TESOURA"){
             console.log("JOAO");
     }else{
         console.log("ANDRE");
     }
    
}