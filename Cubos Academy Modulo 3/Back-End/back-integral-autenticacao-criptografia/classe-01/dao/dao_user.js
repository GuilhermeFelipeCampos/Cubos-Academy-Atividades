const { query }  = require ('../connections/conection_db');
const securePassword = require ('secure-password');

const pwd = securePassword();


 const insertUser = async(user) => {
    const { nome, email, senha } = user;
    try {
        
        const userExist = await query('select * from usuarios where email = $1',[senha]);

        if(userExist.rowCount !== 0){

            return({ message: "Esse email já existe em nossa base de dados."})
        }
        
    } catch (error){

        return({message: error.message});
    }
    try{

        const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
        
        const queryInsert = "insert into usuarios ( nome, email, senha) values ( $1, $2, $3)";
        const { rowCount } = await query(queryInsert,[nome, email, hash]);

        if (rowCount === 0 ){

            return ({ message: "Não foi possível cadastrar usuário." });
        }

        return ({ message: "Usuário cadastrado com sucesso."});

    } catch (error) {
        return({message: error.message});
    }
}

module.exports = {
    insertUser,
}