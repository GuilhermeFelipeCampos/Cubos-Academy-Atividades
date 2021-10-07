const grupos = [1, 1, 1, 1];
let quantidade = 0;
let taxis = 0;
let resto = 0;
if (grupos[3] !== 0) {
    taxis = grupos[3];
}
if (grupos[2] !== 0) {
    if (grupos[2] === 1) {
        taxis += 1;
    } else {
        quantidade = parseInt(((grupos[2] * 3) / 4));
        if ((grupos[2] * 3) % 4 !== 0 && ((grupos[2] * 3) % 4 <= 3)) {
            taxis += quantidade;
            resto += (grupos[2] * 3) % 4;

        } else {
            taxis += quantidade;
        }
    }
}
if (grupos[1] !== 0) {
    if (grupos[1] === 1 && grupos[1] !== 0) {
        if (resto === 2) {
            taxis += 1;
            resto = 0;
        } else if (grupos[1] === 1) {
            taxis += 1;
        }
    } else if (grupos[1] > 1 && grupos[1] !== 0) {
        quantidade = parseInt(((grupos[1] * 2) / 4));
        if ((grupos[1] * 2) % 4 !== 0) {
            if (resto + (quantidade % 4) === 4) {
                taxis += 1;
                resto = 0;
            }
        } else {
            taxis += quantidade;
        }
    }
}
if (grupos[0] !== 0) {
    if (grupos[0] === 1 && resto === 3) {
        taxis += 1;
    } else if (grupos[0] <= 3 && resto === 1) {
        taxis += 1;
    } else if (grupos[0] === 1 && resto === 0) {
        taxis = taxis;
    } else {
        quantidade = parseInt(((grupos[0] * 1) / 4));
        if ((grupos[0] * 1) % 4 !== 0) {
            resto += ((grupos[0] * 1) % 4);
            if (resto <= 4) {
                taxis += 1;
                resto = 0;
            } else {
                quantidade = parseInt(resto / 4);
                if (resto % 4 !== 0) {
                    taxis += quantidade + 1;
                } else {
                    taxis += quantidade;
                }
            }
        } else {
            taxis += quantidade;
        }
    }
}
if (resto !== 0 && resto <= 4) {
    taxis += 1;
}
console.log(taxis);