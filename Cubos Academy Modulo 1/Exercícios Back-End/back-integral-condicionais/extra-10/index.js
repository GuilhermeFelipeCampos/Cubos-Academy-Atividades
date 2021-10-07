const caractere = "E";

if (isNaN(caractere)){
    
    if(caractere === caractere.toUpperCase()){
        if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U"){

            console.log("Vogal Maiúscula");
        }else{
            console.log("Consoante Maiúscula");
        }
    }else {
        if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u"){
            
            console.log("Vogal Minúscula");
        }else{
            console.log("Consoante Minúscula");
        }


    }

}else{
    console.log("Um Número");
}
