const express = require('express');
const consulta = require('../controllers/controllerConsultaEmpresa');

const router = express();

router.get('/empresas/:dominioEmpresa', consulta.consultaEmpresas);

module.exports = router;