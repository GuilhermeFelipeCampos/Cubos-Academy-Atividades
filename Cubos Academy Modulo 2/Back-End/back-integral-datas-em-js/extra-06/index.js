const { add } = require('date-fns');

function promocao(inicio, cliente) {

    const fim = add(inicio, { hours: 24 })

    if (+cliente >= +inicio && +cliente <= +fim) {
        console.log(true);
        return;
    }
    console.log(false);
    return;
}

promocao(new Date(2021, 3, 25, 12), new Date(2021, 3, 26, 15));