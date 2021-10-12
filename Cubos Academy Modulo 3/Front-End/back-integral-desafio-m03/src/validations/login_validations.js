const { statusVerified } = require("./status_verifications");

const loginValidate = (login) => {

    const { email, senha } = login;
    
    if(!email){
        return ({
            status:statusVerified(4),
            message:"E-mail e/ou senha precisa ser informado."});
    }
    if(!senha){
        return ({
            status:statusVerified(4),
            message:"A senha e/ou e-mail precisa ser informada."});
    }
    if (typeof(senha) !== 'string'){
        return ({
            status:statusVerified(4),
            message:"O e-mail e/ou senha precisam estar no formato correto."});
     }

    return login;
}

module.exports = {

    loginValidate,
}