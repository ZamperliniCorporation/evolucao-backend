const express = require('express');
const router = express.Router();
const { gerarPlano } = require('../controllers/iaController');

router.post('/gerar-plano', gerarPlano);

module.exports = router;
