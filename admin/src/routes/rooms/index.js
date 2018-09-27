const express = require('express');
const router = express.Router();

const createRules = require('./../validator/rooms/create');
const editRules = require('./../validator/rooms/edit');
const removeRules = require('./../validator/rooms/remove');
const updateRules = require('./../validator/rooms/update');

const isLoggedIn = require('./../midleware/isloggedin');


//edpoint de entrada para aplicação utilizar
router.get('/', isLoggedIn , require('./../../services/rooms/index'));
router.get('/new', isLoggedIn, require('./../../services/rooms/new'));
router.get('/edit/:slug', isLoggedIn, require('./../../services/rooms/edit'));
router.get('/:id', isLoggedIn, require('./../../services/rooms/show'));
router.post('/', isLoggedIn, require('./../../services/rooms/create'));
router.put('/:id', isLoggedIn, require('./../../services/rooms/update'));
router.patch('/:id', isLoggedIn, require('./../../services/rooms/update'));
router.delete('/:id', isLoggedIn, require('./../../services/rooms/remove'));
module.exports = router;