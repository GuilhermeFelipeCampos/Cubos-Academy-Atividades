const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
let menor = arrayB[0];

for (let i = 0; i < arrayA.length, i < arrayB.length; i++) {

    if (arrayA[i] < menor) {

        menor = arrayA[i];
        console.log(menor);

    } else if (arrayB[i] < menor) {

        menor = arrayB[i];
        console.log(menor);
    }

}