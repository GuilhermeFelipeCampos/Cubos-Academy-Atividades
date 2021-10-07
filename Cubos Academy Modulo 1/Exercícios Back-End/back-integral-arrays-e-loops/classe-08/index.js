const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior = 0;

for(let i = 0; i < numeros.length ; i++){
 
    if(maior < numeros[i]){

        maior = numeros[i];
    }

}
console.log(maior);
