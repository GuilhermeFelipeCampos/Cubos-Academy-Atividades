const { validateLogin } = require("../dao/dao_login");
const { loginValidate } = require("../validations/login_validations")


const login = async (req, resp) => {

    const login =validateLogin(loginValidate(req.body));

    const { status, message, token } = await login;

    if(message !== undefined){
        
        return  resp.status(status).json({message});
    }
    return  resp.status(status).json({token});
}

module.exports = {
    login,
}