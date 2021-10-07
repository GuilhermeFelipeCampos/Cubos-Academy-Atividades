function solucao(produtos) {
	//seu codigo aqui
    let somaTop = 0;
    let somaNaoTop = 0;
    
    for(let item of produtos){
        const preco = item.preco;
        if(preco > 10000){
            somaTop += preco;
        }else{
            somaNaoTop +=preco;
        } 
        
    }
    const chamaTop = {
        totalTop: somaTop,
        percentual: somaTop / (somaNaoTop +somaTop),
    };
    
    console.log(chamaTop);
}