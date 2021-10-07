


 const loginValidation = (login) => {

    
 
    const { email, senha } = login;
    
    if(!email) {
        return({message: "O email precisa ser informado."});

    }
    if(!senha){
        return({message: "A senha precisa ser informada."});
    }

    return login;
}

module.exports = {
    loginValidation,
}