const numeros = [2, 5, 7, 9, 18, 65, 45, 27, 50];
let min = numeros[0]  , max = numeros[0];

for(let i = 0; i < numeros.length; i++) {

    if (min > numeros[i]){
        min = numeros[i];
    }else if (max < numeros[i]){
        max = numeros[i];
    }

}
console.log(max - min);