const express = require('express');
const controllerImoveis = require('../controllers/imoveis');
const router = express();

router.get('/imoveis', controllerImoveis.listaTodosImoveis);
router.get('/imoveis/:idImovel', controllerImoveis.listaImovel);

module.exports = router;