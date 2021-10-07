const { format } = require('date-fns');

function formataDataA(data) {

    console.log(format(data, "dd 'de' MMMM 'de' yyyy"));
}
function formataDataB(data) {

    console.log(format(data, "dd/MM/yyyy"));
}
function formataDataC(data) {

    console.log(format(data, "d MMM"));
}
function formataDataD(data) {

    console.log(format(data, "dd MMM yyyy"));
}
function formataDataE(data) {

    console.log(format(data, "dd 'de' MMM 'de' yyyy"));
}
function formataDataF(data) {

    console.log(format(data, "dd/MMM"));
}


formataDataA(new Date(2021, 7, 9, 18, 0, 59))