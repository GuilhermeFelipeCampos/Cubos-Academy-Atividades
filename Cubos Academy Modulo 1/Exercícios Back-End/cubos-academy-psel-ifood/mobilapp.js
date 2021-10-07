function solucao(tempo, distancia) {
	//seu codigo aqui
    if(tempo < 5 ){
        console.log("600");
    }else{
        if(tempo >= 5 && tempo <= 60){
            console.log((tempo + (distancia/2)) * 100);
        }else{
            if(distancia < 100){
                console.log((distancia * 2) * 100);
            }else{
                console.log((distancia * 1.5) * 100);
            }
        }
    }
}