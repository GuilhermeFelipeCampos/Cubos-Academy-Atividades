//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "credito"){
    console.log(`Valor a ser pago:R$ ${((valorDoProduto - (valorDoProduto * 0.05)) / 100).toFixed(2)} `);

}else if(tipoDePagamento === "cheque"){
   console.log(`Valor a ser pago:R$ ${((valorDoProduto - (valorDoProduto * 0.03)) / 100).toFixed(2)} `);

}else{
    console.log(`Valor a ser pago:R$ ${((valorDoProduto - (valorDoProduto * 0.10)) / 100).toFixed(2)} `);
}
