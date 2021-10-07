const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 300000; //emCentavos

//seu código aqui

if(aposentada === true || portadoraDeDoenca === true){
    
    console.log("ISENTA");
    
}else if(totalDeRendimentos <= 28559.70){
    console.log("VAZA LEÃO! JA TA DIFíCIL SEM VOCÊ");

}else{

    console.log("PEGA LEÃO");
}