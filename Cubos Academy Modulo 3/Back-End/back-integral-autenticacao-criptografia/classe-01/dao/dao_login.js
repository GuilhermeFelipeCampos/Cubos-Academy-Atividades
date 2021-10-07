const { query }  = require ('../connections/conection_db');
const securePassword = require ('secure-password');
const jwt = require ('jsonwebtoken');
const secretKey = require('../secret_key/secretKey');



const pwd = securePassword();

 const registerLogin = async(login) => {

    const{ email, senha } =login;
    
    try {
        
        const userExist = await query('select * from usuarios where email = $1',[email]);
        
        if(userExist.rowCount === 0 ){
            
            return ({ message: "Email não encontrado na base de dados."})
        }
        
       const {senha: senhadb } = userExist.rows[0];
       
       
       
       const result = await pwd.verify(Buffer.from(senha), Buffer.from(senhadb, 'hex'));
       
        switch (result) {
            case securePassword.INVALID_UNREGONIZED_HASH:
            case securePassword.INVALID:    

                return ({message : "Email ou Senha estão incorretos."});

            case securePassword.VALID:
                break;
                
                case securePassword.VALID_NEEDS_REHASH:
                    try {
                        
                        const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
                        const queryUpdate = "update usuarios set senha =$1 where email =$2";
                        await query ( queryUpdate, [ hash, email ]);
                        
                    }catch{     
                    }    
                    break;    
                } 
                
                const user = userExist.rows[0];
                const token = jwt.sign({
                    id: user.id,
                    nome: user.nome,
                    email:user.email,
                },secretKey,{
                    expiresIn:"1h",
                });
                
               
              
                return({message: "Usuário Logado com Sucesso!", token:token})    
        
         }catch (error) {
            
            return ({ message:error.message });
            }
        
    }
    
    module.exports = {
        registerLogin,
        
    }