const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
//utilizando o for ..of
for(let numero of original){

    if(numero % 2 == 0){
        pares.push(numero);
    }else{
        impares.push(numero);
    }
}
console.log("Com for ... of");
console.log(pares);
console.log(impares);

// utilizando o for de C
for(let i = 0; i < original.length; i++){
    if(original[i] % 2 == 0){
        pares.push();
    }else{
        impares.push();
    }
}
console.log("Com for de C");
console.log(pares);
console.log(impares);

i = 0;

//utilizando while
while(original.length < i){

    if(original[i] % 2 == 0){
        pares.push();
    }else{
        impares.push();
    }
    i++;
}

console.log("Com While");
console.log(pares);
console.log(impares);