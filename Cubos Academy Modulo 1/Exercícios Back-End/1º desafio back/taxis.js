const grupos = [1, 1, 1, 1];


/*for (let i = 0; i < grupos.length; i++) {
    switch (i) {
        case 0: {
            quantidade = (grupos[i] * 1);
            quantidadeGrupo = quantidade;
            if (quantidade < 4 && quantidade !== 0) {
                taxis += 1;
            } else if (quantidade >= 4 && quantidade % 4 === 0) {
                taxis = parseInt((quantidade / 4), 10);
            } else {
                taxis = quantidade + 1;
            }
            break;
        }
        case 1: {
            quantidade = (grupos[i] * 2);
            if (quantidadeGrupo < 4 && quantidade <= (quantidadeGrupo - 4)) {
                taxis += 0;
            } else if (quantidade >= 4 && quantidade % 4 === 0) {
                taxis += parseInt((quantidade / 4), 10);
            } else {
                taxis += quantidade + 1;
            }
            break;
        }
        case 2: {
            quantidade = (grupos[i] * 3);
            if (quantidade < 4 && quantidade !== 0) {
                taxis += 1;
            } else if (quantidade >= 4 && quantidade % 4 === 0) {
                taxis += parseInt((quantidade / 4), 10);
            } else {
                taxis += quantidade + 1;
            }
            break;
        }
        case 3: {
            quantidade = (grupos[i] * 4);
            if (quantidade < 4 && quantidade !== 0) {
                taxis += 1;
            } else if (quantidade >= 4 && quantidade % 4 === 0) {
                taxis += parseInt((quantidade / 4), 10);
            } else {
                taxis += quantidade + 1;
            }
            break;
        }
        default: {
            break;
        }
    }
}
*/

/*let quantidade = 0;
let taxis = 0;
let resto = 0;
if (grupos[3] !== 0) {
    taxis += grupos[3];
}
if (grupos[2] !== 0) {
    if (grupos[2] % 4 !== 0) {
        quantidade = grupos[2] * 3;
       if ( quantidade < 4) {
            taxis += 1;
        } else {
            taxis += parseInt((quantidade / 4), 10) + 1;
        }
    } else {
        quantidade = grupos[2] * 3;
        taxis += parseInt((quantidade / 4), 10);
    }
}
if (grupos[1] !== 0) {
    if (grupos[2] % 4 !== 0 && ((grupos[3] % 4) + (grupos[2] % 4) <= 4)) {
        quantidade = grupos[1] * 2;
        if (quantidade < 4) {
            taxis += 1;
        } else {
            taxis += parseInt((quantidade / 4), 10);
        }
    } else {
        quantidade = grupos[2] * 3;
        taxis += parseInt((quantidade / 4), 10);
    }
}

if (grupos[0] <= 4 && grupos[0] !== 0 && grupos[1] !== 0) {
    if ((grupos[1] + (grupos[0] % 4) <= 4)) {
        taxis = taxis;
    } else {
        taxis += 1;
    }
} else {
    if (grupos[0] % 4 !== 0) {
        taxis += parseInt((grupos[0] / 4), 10) + 1;
    } else {
        taxis += parseInt((grupos[0] / 4), 10);
    }
}
console.log(taxis);

//se eu criar um acumulador de resto depois e usar no caso 1

switch grupos{
    case grupos[0]:{
        if(grupos[i] <= 4 && grupos [i] !== 0){
            taxis += 1;
        }else{
            if (grupos[0] % 4 !== 0) {
                    taxis += parseInt((grupos[0] / 4), 10) + 1;
                } else {
                    taxis += parseInt((grupos[0] / 4), 10);
                }
        }
        break;
    }
    case grupos[1]:{
        if(grupos[i] === 1 && grupos[0] <= 2){
            taxis = taxis;
        }else{
            if(grupos[i] <= 2 && grupos[i] !== 0){
                taxis += 1;
            }else{
                if(grupos[i] % 4 !== 0){
                    quantidade = grupos[i] * 2;
                    taxis += parseInt((quantidade / 4), 10) + 1;
                }
            }
        }
        
        break;
    } 
    case grupos[2]:{
        if(grupos[i] === 1){
            taxis += 1;
        }else{
            if(grupos[i] % 4 !== 0){
                taxis += parseInt((grupos[0] / 4), 10) + 1;
            }else{
                taxis += parseInt((grupos[0] / 4), 10);
            }
        }    
        break;
    }
    case grupos[3]:{
        taxis += grupos[i];
        break;
    }
    default:{
        break;
    }    
}

console.log(taxis);
} 

switch grupos{
    case grupos[0]:{
        if(grupos[i] <= 4 && grupos [i] !== 0){
            taxis += 1;
        }else{
            if (grupos[0] % 4 !== 0) {
                    taxis += parseInt((grupos[0] / 4), 10) + 1;
                } else {
                    taxis += parseInt((grupos[0] / 4), 10);
                }
        }
        break;
    }
    case grupos[1]:{
        if(grupos[i] === 1 && grupos[0] <= 2){
            taxis = taxis;
        }else{
            if(grupos[i] <= 2 && grupos[i] !== 0){
                taxis += 1;
            }else{
                if(grupos[i] % 4 !== 0){
                    quantidade = grupos[i] * 2;
                    taxis += parseInt((quantidade / 4), 10) + 1;
                }
            }
        }
        
        break;
    } 
    case grupos[2]:{
        if(grupos[i] === 1){
            taxis += 1;
        }else{
            if(grupos[i] % 4 !== 0){
                taxis += parseInt((grupos[0] / 4), 10) + 1;
            }else{
                taxis += parseInt((grupos[0] / 4), 10);
            }
        }    
        break;
    }
    case grupos[3]:{
        taxis += grupos[i];
        break;
    }
    default:{
        break;
    }    
}

console.log(taxis);
} 
*/
let quantidade = 0;
let taxis = 0;
let resto = 0;
if (grupos[3] !== 0) {
    taxis = grupos[3];
}
if (grupos[2] !== 0) {
    if (grupos[2] % 4 !== 0) {
        quantidade = grupos[2] * 3;
        if (quantidade < 4) {
            taxis += 1;
        } else {
            taxis += parseInt((quantidade / 4), 10);
            resto += quantidade % 4;
        }
    }
    if (grupos[1] !== 0) {
        quantidade = grupos[2] * 2;
        if (quantidade < 4) {
            taxis += 1;
        } else {
            taxis += parseInt((quantidade / 4), 10);
            resto += quantidade % 4;
        }
    }
    if (grupos[0] !== 0) {
        if ((grupos[0] + (resto !== 0)) <= 4) {
            taxis += 1;
            resto = 0;
        } else if (grupos[0] >= 4) {
            if (grupos[0] % 4 !== 0) {
                taxis += parseInt((grupos[0] / 4), 10);
                resto += grupos[0] % 4;
            } else {
                taxis += parseInt((grupos[0] / 4), 10);
            }
        }
    }
    if (resto <= 4 && resto !== 0) {
        taxis += 1;
    } else {
        if (resto % 4 !== 0) {
            quantidade = parseInt((resto / 4), 10);
            taxis += quantidade + 1;
        } else {
            quantidade = parseInt((resto / 4), 10);
            taxis += quantidade;
        }

    }
}
console.log(taxis);