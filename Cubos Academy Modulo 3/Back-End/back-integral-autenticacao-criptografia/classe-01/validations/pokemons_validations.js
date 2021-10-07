
const jwt = require ('jsonwebtoken');
const { selectAllPokemons, selectPokemon } = require('../dao/dao_pokemon');
const secretKey = require('../secret_key/secretKey');





const pokemonValidation = (pokemon, token) => {

   const { nome, habilidades} = pokemon;
   
   if(!nome){
       return({ message: "Obrigatório informar o nome"});
   }
   if(!habilidades){
    return({ message: "Obrigatório informar as habilidades"});
   }
   
   
   if(!token){
    return({ message: "Necessário estar logado como usuário do sistema"});
   }
   try {
       
    const insertPokemon = jwt.verify(token,secretKey);
    return ({...pokemon, usuario_id:insertPokemon.id });
    
   } catch  {
    return({ message: "Token fornecido é inválido"});
   }
}

const showAllPokemons = async(token) => {
    
    
    if(!token){
        return({ message: "Necessário estar logado como usuário do sistema"});
       }
       
       try {
           
         const { usuario_id } = jwt.verify(token,secretKey);
        const pokemons = await selectAllPokemons(usuario_id);
        const newPokemons = [];
        for (const pokemon of pokemons){
    
            const pokemonHabilidades = pokemon.habilidades.split(","); 
            newPokemons.push({...pokemon, habilidades:pokemonHabilidades});
            
        }
    
        return newPokemons;
        
       } catch  {
        return({ message: "Token fornecido é inválido"});
       }
    

}

const validationUpdatePokemon =  (pokemon,token) => {

    if(!token){
        return({ message: "Necessário estar logado como usuário do sistema"});
       }
       
       try {
           
        const insertPokemon = jwt.verify(token,secretKey);
        
        if(!pokemon.apelido){

            return({ message: "O Apelido precisa ser informado."});
        }
    
        return ({...pokemon, usuario_id:insertPokemon.id });
        
       } catch  {

        return({ message: "Token fornecido é inválido"});
       }
}

const validationShowPokemon = async(token,id) => {

    console.log(token)

    if(!token){
        return({ message: "Necessário estar logado como usuário do sistema"});
       }
       
       try {
           
            const {usuario_id } = jwt.verify(token,secretKey);
            const pokemons = await selectPokemon(id, usuario_id);
            const newPokemons = [];
            for (const pokemon of pokemons){
        
                const pokemonHabilidades = pokemon.habilidades.split(","); 
                newPokemons.push({...pokemon, habilidades:pokemonHabilidades});
                
            }
    
        return newPokemons;
        
       } catch  {
        return({ message: "Token fornecido é inválido"});
       }
}



module.exports = {
    pokemonValidation,
    showAllPokemons,
    validationUpdatePokemon,
    validationShowPokemon,
}