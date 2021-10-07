const express = require ('express');
const { registerPokemon, listPokemon, updatedPokemon, showPokemon } = require('../controllers/pokemon_registration');
const { userLogin } = require('../controllers/user_login');
const { registerUser } = require('../controllers/user_registration');


const router = express();


// User Register
router.post('/usuario',registerUser);

//Authenticated Login
router.post('/loginUsuario', userLogin);

//crud pokemon
router.post('/pokemon',registerPokemon);
router.get('/pokemons', listPokemon);
router.put('/pokemon/:id',updatedPokemon);
router.get('/pokemon/:id',showPokemon);

module.exports = router;