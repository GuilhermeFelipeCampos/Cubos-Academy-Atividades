const { insertUsers, updateUser } = require("../dao/dao_users");
const { validateUsers } = require("../validations/users_validation");


const registerUsers = async (req, resp) => {

    const user = insertUsers(validateUsers(req.body));
    const { status, message } = await user;
    
    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});

}

const detailUsers = async (req, resp) => {

    return resp.status(200).json(req.user);
}

const updaterUser = async (req ,resp) => {

    const { id } = req.user;

    const user =  updateUser(id,validateUsers(req.body));
    const { status, message } = await user;
    
    if(typeof message !== 'string'){

        return  resp.status(status).json(message);
      }
      return  resp.status(status).json({message});

}

module.exports = {
    registerUsers,
    detailUsers,
    updaterUser,  
    

}


