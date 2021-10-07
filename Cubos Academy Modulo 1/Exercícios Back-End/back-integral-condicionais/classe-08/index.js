const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if((idade >=12 && idade <=65) && possuiPatologia !== true && altura > 150){

    if (idade < 18 || ehEstudante !== false){
        console.log("10 Reais");
    }else{
        console.log("20 Reais");
    }

}else{
    console.log("ACESSO NEGADO");
}

