const { insertUser } = require("../dao/dao_user");
const { userValidation } = require("../validations/users_validations");


 const registerUser = async (req,resp) => {

    const user = userValidation(req.body);

    const { message } = user;
   
    if (message !== undefined){
        return resp.status(400).json(message);
    }

    const dbUser = insertUser(user); 

    return resp.json((await dbUser).message);

}

module.exports = {
    registerUser,
}