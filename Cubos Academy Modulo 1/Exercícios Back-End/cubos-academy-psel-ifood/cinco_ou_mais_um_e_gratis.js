function solucao(precos) {
    //seu codigo aqui
    let menor = precos[0];
    let somaPrecos = 0;
    if(precos.length >= 5){
        for(let i = 0; i < precos.length; i++){
            if(precos[i] < menor){
                menor = precos[i];
            }
            somaPrecos += precos[i];
        }
          console.log(somaPrecos - menor);
     }else{
         for (let i = 0; i < precos.length; i++){
             somaPrecos += precos[i];
         }
         console.log(somaPrecos);
     }
    
}