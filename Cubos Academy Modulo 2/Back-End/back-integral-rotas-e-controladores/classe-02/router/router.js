const express = require('express');
const controllerAlunos = require('../controllers/alunos');
const router = express();

router.get('/alunos', controllerAlunos.listaTodosAlunos);
router.get('/alunos/:idAluno', controllerAlunos.consultaAluno);
router.post('/alunos', controllerAlunos.criarAluno);
router.patch('/alunos/:idAluno', controllerAlunos.editarAluno);
router.put('/alunos/:idAluno', controllerAlunos.substituirAluno);
router.delete('/alunos/:idAluno', controllerAlunos.deletarAluno);

module.exports = router;