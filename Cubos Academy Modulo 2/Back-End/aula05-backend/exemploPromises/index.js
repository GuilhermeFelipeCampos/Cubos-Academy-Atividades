const axios = require('axios');

// const cepPromise = axios.get("https://viacep.com.br/ws/20730380/json/");

// cepPromise.then((response) => {
//     // console.log(response.data);
// });
// //console.log(cepPromise);

function obterLogradouro(cep) {
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    let logradouro;
    const logradouroPromise = responsePromise.then((response) => response.data.logradouro);
    return logradouroPromise;
}
//funções assíncronas
async function obterLogradouro2(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data.logradouro;

}
async function exibirLogradouros(ceps) {
    for (const cep of ceps) {
        console.log(cep, "=>", await obterLogradouro2(cep));
    }
}

exibirLogradouros(["20730380", "01001000"]);

// console.log(obterLogradouro("20730380").then((logradouro) => console.log(logradouro)));
// console.log(obterLogradouro("01001000").then((logradouro) => console.log(logradouro)));