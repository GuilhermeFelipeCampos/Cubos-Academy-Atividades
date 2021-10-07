const { query }  = require ('../connections/conection_db');

const insertPokemon = async (pokemon) => {

    const {usuario_id, nome, habilidades, imagem, apelido} = pokemon;

    try{

        const queryInsert = "insert into pokemons (usuario_id, nome ,habilidades, imagem, apelido) values ($1, $2, $3, $4, $5)";

        const pokemonInsert = await query(queryInsert,[usuario_id,nome,habilidades,imagem, apelido]);

        if(pokemonInsert.rowCount === 0) {

            return ({message : "Não foi possível cadastrar Pokemon."});
        }


    }catch(error){

        return ({message : error.message});
    }

    return ({message : "Pokemon cadastrado com sucesso"});
}


const selectAllPokemons = async (usuario_id) => {

    try {
        const querySelect = `select p.id, u.nome as usuario, p.nome  , p.apelido, p.habilidades, p.imagem 
                             from pokemons p join usuarios u on usuario_id = $1`;

        const pokemons = await query(querySelect,[usuario_id]);

        return (pokemons.rows);

    } catch (error) {
        
        return ({ message : error.message});
    }
} 

const updatePokemon = async (id,pokemon) => {
 
           const {apelido , usuario_id } =  pokemon;

 
    try {

        const queryUpdate = `update pokemons set apelido = $1 
        where id = $2 and usuario_id = $3`;

        const pokemonUpdated = await query(queryUpdate,[apelido, parseInt(id) ,usuario_id]);

        if (pokemonUpdated.rowCount === 0 ){

            return ({message : "Não foi possível atualizar Pokemon."});
        }

        return ({message : "Pokemons atualizado com sucesso."});
        
    } catch (error) {
        
        return ({message : error.message});
    }

}

const selectPokemon = async (id,usuario_id) => {

    try {
        const querySelect = `select p.id, u.nome as usuario, p.nome  , p.apelido, p.habilidades, p.imagem 
        from pokemons p join usuarios u on usuario_id = $1 and p.id = $id`;

const pokemons = await query(querySelect,[usuario_id,id]);

return (pokemons.rows);

        
    } catch (error) {
        return ({message : error.message});
    }
}
module.exports = {
    insertPokemon,
    selectAllPokemons,
    updatePokemon,
    selectPokemon,
    
}