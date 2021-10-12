const { statusVerified } = require("./status_verifications");

const validateProducts = (product) => {

    const { nome, quantidade, categoria, preco, descricao, imagem } = product;

   
    
    if(!nome){
        
        return ({
            status:statusVerified(4),
            message:"Nome do produto precisa ser informado"});
    }
    if(typeof(nome) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"Nome do produto precisa estar no formato correto"});
    }
    if(!quantidade){

        return ({
            status:statusVerified(4),
            message:"A quantidade do produto precisa ser informada!"});
    }
    if(typeof(quantidade) !== 'number'){
        return ({
            status:statusVerified(4),
            message:"A quantidade informada precisa ser um número."});
    }
    if(quantidade <= 0){
        return ({
            status:statusVerified(4),
            message:"A quantidade informada precisa ser um número maior do que zero."});
    }
    
    if(!preco){

        return ({
            status:statusVerified(4),
            message:"O valor do produto precisa ser informado!"});
    }
     if (typeof(preco) !== 'number'){
        return ({
            status:statusVerified(4),
            message:"O valor do produto precisa ser informado em centavos"});
     }
    if(!descricao){

        return ({
            status:statusVerified(4),
            message:"A descrição do produto precisa ser informada!"});
    }

    if(typeof(descricao) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"A descrição do produto precisa estar no formato correto"});
    }
    return product;
}


module.exports = {
    validateProducts,
}