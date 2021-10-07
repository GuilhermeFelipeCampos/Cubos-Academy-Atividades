const { insertPokemon, updatePokemon } = require("../dao/dao_pokemon");
const { pokemonValidation, showAllPokemons, validationUpdatePokemon, validationShowPokemon } = require("../validations/pokemons_validations")


const registerPokemon = async (req,resp) => {

    const token  = req.headers.authorization.split(" ")[1];

    const pokemon = pokemonValidation(req.body, token);

    if(pokemon.message !== undefined){
        
        return resp.status(400).json(pokemon.message);
    }

   const savedPokemon = insertPokemon(pokemon);

   return resp.json((await savedPokemon).message);

}

const listPokemon = async (req, resp) => {
   
    const token  = req.headers.authorization.split(" ")[1];
    
    return resp.status(200).json(await showAllPokemons(token));
}


const updatedPokemon = async (req, resp) => {
    const token  = req.headers.authorization.split(" ")[1];
    const { id } = req.params;
    const pokemon = req.body;
    resp.status(200).json(await (await updatePokemon(id,validationUpdatePokemon(pokemon,token))).message);
}

const showPokemon = async ( req, resp ) => {

    const token  = req.headers.authorization.split(" ")[1];
    const { id } = req.params;

    resp.status(200).json(await validationShowPokemon(token, id));


}



module.exports = {
    registerPokemon,
    listPokemon,
    updatedPokemon,
    showPokemon,
}