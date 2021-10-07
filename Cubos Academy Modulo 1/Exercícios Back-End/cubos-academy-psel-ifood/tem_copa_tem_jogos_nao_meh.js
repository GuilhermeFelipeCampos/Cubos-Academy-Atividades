function solucao(ano) {
	//seu codigo aqui
    let i = 2022;
    if (ano === 2022){
        console.log("COPA");
    }else{
        while(i <= ano){
            if((ano % 2)!=0){
                console.log("MEH");
                break;
            }else if(Number.isInteger((ano - i) / 4)){
                console.log("COPA");
                break;
            }else{
               console.log("JOGOS");
                break; 
            }
        }
    }
}
