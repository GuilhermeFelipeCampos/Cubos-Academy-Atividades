const { query } = require ('../conexao');
const jwt = require('jsonwebtoken');
const wordSecret = require('../secret_key/authorization_key');


const filterAthentication = async (req, resp, next) => {

    const { authorization } = req.headers;
    
    if(!authorization){

        return resp.status(404).json({message:"Token não informado."});
    }
    const token = authorization.replace('Bearer', '').trim();

    const user = jwt.verify(token,wordSecret);
    if(!user){

        return resp.status(404).json({message:"Token não válido!"});
    }
    try {

        const querySelect = `select * from usuarios where id = $1`;
        const userExists = await query(querySelect,[user.id]);
        if(userExists.rowCount === 0 ) {

            return resp.status(404).json({message:"Usuário não encontrado na nossa base de dados!"});
        }
        const {id , nome, email, nome_loja } = userExists.rows[0];
        req.user = {id , nome, email, nome_loja };
       
        return next();
        
    } catch (error) {
        
        resp.status(401).json({message:error.message});
    }

}

module.exports = {
    filterAthentication,
}