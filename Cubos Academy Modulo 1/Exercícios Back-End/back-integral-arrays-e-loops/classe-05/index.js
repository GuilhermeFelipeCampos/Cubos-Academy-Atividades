const original = [1, 4, 12, 21, 53, 88, 112];

const pares = [];

for (let par of original){

    if (par % 2 == 0){

        pares.push(par);
    }
}
console.log(pares);
