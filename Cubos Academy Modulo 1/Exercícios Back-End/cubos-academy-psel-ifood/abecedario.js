function solucao(letra, palavras) {
	//seu codigo aqui
    let cont = 0;
    for (let item of palavras){
        if(item[0] != letra){
            cont++;
        }
    }
    console.log(cont);
}