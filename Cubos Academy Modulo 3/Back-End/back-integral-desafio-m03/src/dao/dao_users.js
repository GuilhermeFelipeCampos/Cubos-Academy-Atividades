const { query } = require ('../conexao');
const { statusVerified } = require('../validations/status_verifications');
const bcrypt = require ('bcrypt');


const insertUsers = async (user) => {

    const { nome, nome_loja , email, senha, status } = user;

    if(status){
        return user;
    }

    try {
        try {
            const querySelect = `select * from usuarios where email = $1`;
            const existUser = await query(querySelect,[email]);
            if(existUser.rowCount !== 0 ){
                return ({status:statusVerified(4),
                         message:"Já existe usuário cadastrado com o e-mail informado."});
            }   
    
        } catch (error) {
            return ({status:statusVerified(4),
                    message:error.message});
    
        }
        const cryptedPassword = await bcrypt.hash( senha, 10 );

        const queryInsert = `insert into usuarios (nome, nome_loja, email, senha)
                             values ($1, $2, $3, $4)`;
        const  userInserted = await query(queryInsert,[nome,nome_loja,email,cryptedPassword]);
        
        if (userInserted.rowCount === 0 ){

            return ({status:statusVerified(4),
                message:"Cadastro não realizado!"});
        }

        return ({status:statusVerified(3)});

    } catch (error) {
        return ({status:statusVerified(4),
            message:error.message});
    }

    

}

const updateUser = async (id, user) => {

    const { nome, nome_loja , email, senha, status } = user;
    
    if(status){
        return user;
    }
    if(!id){
        return ({status:statusVerified(5),
            message:"Usuário não logado no sistema!"});
    }
    try {
        const querySelect = `select * from usuarios where email =$1 and id <>$2`;
        const existUser = await query(querySelect,[email, id]);
        if(existUser.rowCount !== 0 ){
            return ({status:statusVerified(4),
                     message:"Já existe usuário cadastrado com o e-mail informado."});
        } 
        const cryptedPassword = await bcrypt.hash( senha, 10 );

        const queryUpdate = `update usuarios set nome = $1, email = $2,
                              senha =$3, nome_loja = $4 where id = $5`;
                              
        const updatedUser = await query(queryUpdate,[ nome, email, cryptedPassword, nome_loja, id]);
        
        if(updatedUser.rowCount === 0 ){

            return ({status:statusVerified(4),
                     message:"Não foi possível atualizar o usuário no banco de dados."});
        }
        return ({status:statusVerified(3)});
    } catch (error) {
        return ({status:statusVerified(4),
                message:error.message});

    }
    
} 


module.exports = {
    insertUsers,
    updateUser,
}