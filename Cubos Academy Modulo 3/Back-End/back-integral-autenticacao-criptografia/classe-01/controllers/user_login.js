const { registerLogin } = require("../dao/dao_login");
const { loginValidation } = require("../validations/login_validations");




const userLogin = async (req,resp) => {

    const login = loginValidation(req.body);

    const { message } = login; 

    if (message !== undefined){

        return resp.status(400).json(message);
    }
    const dbLogin = registerLogin(login);
    
    console.log(await dbLogin);
    return resp.json((await dbLogin));
}

module.exports = {
    userLogin,
}