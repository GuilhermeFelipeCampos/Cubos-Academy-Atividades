
const { query } = require ('../conexao');
const { statusVerified } = require('../validations/status_verifications');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const wordSecret = require('../secret_key/authorization_key');

const validateLogin = async (login) => {

    const { email, senha, status } = login;

    if(status){
        return login;
    }

    try {
        const querySelect = `select * from usuarios where email = $1`;
        const selectedLogin = await query(querySelect,[email]);

        if(selectedLogin.rowCount === 0){

            return ({status:statusVerified(4),
                message:"Não exsite e-mail na nossa base de dados."});
        }
        const {id,  senha:dbSenha} = selectedLogin.rows[0];

        const passwordCompare = await bcrypt.compare(senha, dbSenha);

        if(!passwordCompare){

            return ({status:statusVerified(4),
                message:"Usuário e/ou senha inválido(s)."});
        }
        const token = jwt.sign({id},
                                wordSecret,
                                {expiresIn:'6h'});

                               
        return ({status:statusVerified(2),
                 token:token });                       
    }catch (error) {
        
        return ({status:statusVerified(4),
            message:error.message});
    }

}

module.exports = {

    validateLogin,
}