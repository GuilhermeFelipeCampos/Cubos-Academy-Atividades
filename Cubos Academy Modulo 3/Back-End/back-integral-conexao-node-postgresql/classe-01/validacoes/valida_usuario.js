

const validaUsuario = (usuario) =>{
    const { nome, email, cpf, telefone } = usuario;
    if (!nome){
       return {mensagem: "Um nome precisa ser informado!"};
    }
    if(typeof nome !== "string"){
        
        return {mensagem: "O nome precisa ser do tipo 'TEXTO'"};
    }
    if (!nome.includes(" ")) {
       
        return {mensagem: "Necessário informar o Nome e Sobrenome"};
        
    }
    if (!cpf || cpf.length !== 11) {

        return {mensagem: "O CPF precisa conter 11 dígitos"};
            
    }
    if (!email.includes("@") || !email) {

        return {mensagem: "Digite um email válido"};     
        
    }
    
    return usuario;
}

module.exports = {
    validaUsuario,
};