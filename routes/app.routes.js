//Importo las funciones
const {get, put, post, delet} = require('../controllers/app.controllers');

const router = require('express').Router();

//Relaciono las funciones con los controladores
router.get('/', get);

router.post(`/`, post);

router.put(`/`, put);

router.delete(`/`, delet);

//Exporta el modulo router
module.exports = router;