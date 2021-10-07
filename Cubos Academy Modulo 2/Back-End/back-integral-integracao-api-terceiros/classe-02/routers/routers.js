const express = require('express');
const { vote, printVotes } = require('../controllers/controllerVotacao');


const router = express();

router.post('/votacao/:pais/:ip', vote);
router.get('/votacao', printVotes);

module.exports = router;