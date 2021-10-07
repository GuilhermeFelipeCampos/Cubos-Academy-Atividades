const ladoA = 3;
const ladoB = 3;


//seu código aqui

if (ladoA === ladoB){

    switch (ladoA){
        case 0 :
            console.log(`Sim com valor Branco de ${ladoA} e ${ladoB}`);
            break;
        case 1:
            console.log(`Sim com valor Às de ${ladoA} e ${ladoB}`); 
            break;
        case 2:
            console.log(`Sim com valor Duque de ${ladoA} e ${ladoB}`);
            break;
        case 3:
            console.log(`Sim com valor Terno de ${ladoA} e ${ladoB}`);
            break;
        case 4:
            console.log(`Sim com valor Quadra de ${ladoA} e ${ladoB}`); 
            break;
        case 5:
            console.log(`Sim com valor Quina de ${ladoA} e ${ladoB}`); 
            break;
        case 6:
            console.log(`Sim com valor Sena de ${ladoA} e ${ladoB}`);  
            break;
        default:
            break;                       
    }
}else{
    console.log("Não e " + (ladoA > ladoB ? `O lado A é maior com ${ladoA}` : `O lado B é maior com ${ladoB}`));
}
