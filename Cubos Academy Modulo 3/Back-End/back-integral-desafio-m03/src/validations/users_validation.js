const { statusVerified } = require("./status_verifications");


const validateUsers = (user) => {
    
    const { nome, nome_loja, email, senha}  = user;
    
    if(!nome){
        
        return ({
            status:statusVerified(4),
            message:"Nome do usuário precisa ser informado"});
    }
    if(typeof(nome) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"Nome do usuário precisa estar no formato correto"});
    }
    if(!nome_loja){

        return ({
            status:statusVerified(4),
            message:"Nome da loja precisa ser informada!"});
    }
    if(typeof(nome_loja) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"O nome da loja precisa estar no formato correto"});
    }
    if(!email){

        return ({
            status:statusVerified(4),
            message:"O email precisa ser informado!"});
    }
     if (typeof(email) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"O e-mail precisa estar no formato correto"});
     }
    if(!senha){

        return ({
            status:statusVerified(4),
            message:"A senha precisa ser informada!"});
    }
    return user;
}

module.exports = {
    validateUsers,
}