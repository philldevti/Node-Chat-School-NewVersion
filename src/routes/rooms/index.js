const express = require('express');
const router = express.Router();

const createRules = require('./../validator/rooms/create');
const editRules = require('./../validator/rooms/edit');
const removeRules = require('./../validator/rooms/remove');
const updateRules = require('./../validator/rooms/update');


//edpoint de entrada para aplicação utilizar
router.get('/', require('./../../services/rooms/index'));
router.get('/new', require('./../../services/rooms/new'));
router.get('/edit/:slug', require('./../../services/rooms/edit'));
router.get('/:id', require('./../../services/rooms/show'));
router.post('/', require('./../../services/rooms/create'));
router.put('/:id', require('./../../services/rooms/update'));
router.patch('/:id', require('./../../services/rooms/update'));
router.delete('/:id', require('./../../services/rooms/remove'));
module.exports = router;