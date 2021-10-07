
 const userValidation = (user) => {

    const {nome ,email, senha} = user;

    if(!nome) {

        return({message: "O nome precisa ser informado."})
    }

    if(!email) {
        return({message: "O email precisa ser informado."});

    }
    if(!senha){
        return({message: "A senha precisa ser informada."});
    }

    return user;
}

module.exports = {
    userValidation,
}