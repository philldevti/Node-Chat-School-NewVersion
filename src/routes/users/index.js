const express = require('express');
const router = express.Router();

const createRules = require('./../validator/users/create');

//edpoint de entrada para aplicação utilizar
router.get('/', require('./../../services/users/index'));
router.get('/new', require('./../../services/users/new'));
router.get('/edit/:id', require('./../../services/users/edit'));
router.get('/:id', require('./../../services/users/show'));
router.post('/', require('./../../services/users/create'));
router.put('/:id', require('./../../services/users/update'));
router.patch('/:id', require('./../../services/users/update'));
router.delete('/:id', require('./../../services/users/remove'));
module.exports = router;