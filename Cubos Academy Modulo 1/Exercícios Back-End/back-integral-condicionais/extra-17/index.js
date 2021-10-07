//valor do produto comprado.
// Programa para Valores em Centavos!!
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


console.log(`Restam ${quantidadeDoParcelamento -  ((valorPago * 100) / (valorDoProduto / quantidadeDoParcelamento))} parcelas de R$ ${((valorDoProduto / quantidadeDoParcelamento) / 100).toFixed(2)}`);

