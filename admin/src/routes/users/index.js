const express = require('express');
const router = express.Router();

const createRules = require('./../validator/users/create');
const editRules = require('./../validator/users/edit');
const removeRules = require('./../validator/users/remove');
const updateRules = require('./../validator/users/update');

const isLoggedIn = require('./../midleware/isloggedin');

//edpoint de entrada para aplicação utilizar
router.get('/', isLoggedIn, require('./../../services/users/index'));
router.get('/new', isLoggedIn, require('./../../services/users/new'));
router.get('/edit/:id', isLoggedIn, require('./../../services/users/edit'));
router.get('/:id', isLoggedIn, require('./../../services/users/show'));
router.post('/', isLoggedIn, require('./../../services/users/create'));
router.put('/:id', isLoggedIn, require('./../../services/users/update'));
router.patch('/:id', isLoggedIn, require('./../../services/users/update'));
router.delete('/:id', isLoggedIn, require('./../../services/users/remove'));
module.exports = router;