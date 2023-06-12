

const {get, put, post, delet} = require('../controllers/app.controllers');

const router = require('express').Router();

router.get('/', get);

router.post(`/`, post);

router.put(`/`, put);

router.delet(`/`, delet);


module.exports = router;